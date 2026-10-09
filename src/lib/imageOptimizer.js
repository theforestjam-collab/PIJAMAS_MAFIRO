/**
 * Utilidad de optimización y compresión de imágenes en Frontend
 * Convierte formatos JPEG, PNG, etc. a WebP con redimensionamiento inteligente
 * para ahorrar cuota de Supabase Storage y acelerar la carga en dispositivos móviles.
 */

export function formatFileSize(bytes) {
  if (!bytes || bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}

/**
 * Optimiza y comprime un archivo de imagen convirtiéndolo a WebP
 * @param {File|Blob} file - Archivo de imagen original
 * @param {Object} options - Parámetros de compresión
 * @param {number} [options.maxWidth=1200] - Ancho máximo permitido
 * @param {number} [options.maxHeight=1500] - Alto máximo permitido
 * @param {number} [options.quality=0.82] - Calidad de compresión WebP (0 a 1)
 * @returns {Promise<{ file: File, originalSize: number, compressedSize: number, savedPercent: number, previewUrl: string }>}
 */
export async function compressImageToWebP(file, options = {}) {
  const {
    maxWidth = 1200,
    maxHeight = 1500,
    quality = 0.82
  } = options;

  if (!file || !(file instanceof Blob)) {
    throw new Error('Archivo de imagen no válido para compresión');
  }

  // Si ya es un WebP pequeño (< 100 KB), lo dejamos intacto para evitar recompresión innecesaria
  if (file.type === 'image/webp' && file.size < 100 * 1024) {
    const previewUrl = URL.createObjectURL(file);
    return {
      file,
      originalSize: file.size,
      compressedSize: file.size,
      savedPercent: 0,
      previewUrl
    };
  }

  return new Promise((resolve) => {
    const objectUrl = URL.createObjectURL(file);
    const img = new Image();

    img.onload = () => {
      try {
        let width = img.naturalWidth || img.width;
        let height = img.naturalHeight || img.height;

        // Calcular escalado proporcional manteniendo el ratio de aspecto
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        // Crear Canvas con aceleración de dibujo
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) {
          URL.revokeObjectURL(objectUrl);
          resolve({
            file,
            originalSize: file.size,
            compressedSize: file.size,
            savedPercent: 0,
            previewUrl: objectUrl
          });
          return;
        }

        // Suavizado de bordes bicúbico
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        // Convertir a WebP
        canvas.toBlob(
          (blob) => {
            URL.revokeObjectURL(objectUrl);

            if (!blob) {
              // Fallback si el navegador no soporta webp export
              resolve({
                file,
                originalSize: file.size,
                compressedSize: file.size,
                savedPercent: 0,
                previewUrl: objectUrl
              });
              return;
            }

            // Sanitizar nombre de archivo y cambiar extensión a .webp
            const originalName = file.name || 'prenda';
            const nameWithoutExt = originalName.lastIndexOf('.') > 0
              ? originalName.substring(0, originalName.lastIndexOf('.'))
              : originalName;
            const cleanName = nameWithoutExt.replace(/[^a-zA-Z0-9_-]/g, '_');
            const newFileName = `${cleanName}.webp`;

            const webpFile = new File([blob], newFileName, {
              type: 'image/webp',
              lastModified: Date.now()
            });

            const savedPercent = file.size > blob.size
              ? Math.round(((file.size - blob.size) / file.size) * 100)
              : 0;

            const previewUrl = URL.createObjectURL(blob);

            resolve({
              file: webpFile,
              originalSize: file.size,
              compressedSize: blob.size,
              savedPercent,
              previewUrl,
              width,
              height
            });
          },
          'image/webp',
          quality
        );
      } catch (err) {
        URL.revokeObjectURL(objectUrl);
        console.warn('Error durante el procesamiento canvas de imagen:', err);
        // Fallback seguro
        resolve({
          file,
          originalSize: file.size,
          compressedSize: file.size,
          savedPercent: 0,
          previewUrl: objectUrl
        });
      }
    };

    img.onerror = (err) => {
      URL.revokeObjectURL(objectUrl);
      console.warn('Error al cargar imagen para compresión:', err);
      // Fallback seguro al archivo original
      resolve({
        file,
        originalSize: file.size,
        compressedSize: file.size,
        savedPercent: 0,
        previewUrl: objectUrl
      });
    };

    img.src = objectUrl;
  });
}
