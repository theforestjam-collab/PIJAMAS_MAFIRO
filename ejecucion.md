Actúa como un Diseñador UI/UX Senior y Arquitecto Frontend. 

### CONTEXTO Y OBJETIVO
Tenemos una aplicación de catálogo web y panel de administración en producción (`luna_clara`) construida con Vite/React, Tailwind CSS y Supabase. 
Necesitamos reutilizar toda la lógica funcional y de negocio existente (autenticación, consultas de Supabase, subida de imágenes a Storage, lógica de variantes por color y redirección a WhatsApp), realizando un REBRANDING Y REDISEÑO INTEGRAL para la marca:

**"Pijamas MAFIRO - Y MUCHO MÁS"**
Slogan: *"Comodidad, estilo y ternura para cada momento"*
Número de WhatsApp oficial: `59170095775`

Queremos transformar la apariencia visual sin comprometer la estabilidad del sistema, manteniendo el código limpio, desacoplado y 100% responsivo para móviles y escritorio, sumando además optimización de imágenes antes de la subida.

---

### PALETA DE COLOR E IDENTIDAD VISUAL (Extraída del Logo)
El nuevo diseño debe transmitir ternura, calidez, suavidad y estilo infantil/coquette:
- **Rosa Principal / Brand:** `#FF6B97` / `#FF85A2` (Tono vibrante pero dulce de las letras "Pijamas" y el lazo).
- **Violeta / Acento:** `#7E57C2` / `#6C4AB6` (Tono lavanda/morado de las letras "MAFIRO").
- **Amarillo / Estrellas & Luna:** `#FFD54F` / `#FFF176` (Detalles de lunas, estrellas y badges destacados).
- **Fondo / Lienzo:** `#FFF9F2` / `#FFFDF9` (Tono crema/marfil suave, evitando el blanco hospitalario puro).
- **Texto y Contraste:** `#4A2E35` o `#3E2723` (Marrón chocolate / café oscuro suave para textos principales en lugar de negro puro, manteniendo calidez y excelente legibilidad).
- **Estilo de componentes:** Bordes muy redondeados (`rounded-2xl` o `rounded-3xl`), sombras suaves difuminadas con leve tinte cálido, badges amigables tipo sticker o detalles sutiles.

---

### OPTIMIZACIÓN DE ALMACENAMIENTO (Conversión automática a WebP en Frontend)
Para cuidar la cuota de Supabase Storage y asegurar máxima velocidad de carga:
1. Implementar una utilidad en el frontend (usando Canvas API nativo o una librería ligera como `browser-image-compression`) en el flujo de subida de imágenes del panel de administración.
2. Cada imagen seleccionada (sea JPEG, JPG o PNG, tomada desde cámara o galería):
   - Debe redimensionarse a un ancho máximo razonable para catálogo (ej. max 1080px a 1200px).
   - Debe convertirse y comprimirse automáticamente a formato `.webp` (calidad ~80-85%).
   - Debe subirse a Supabase Storage con extensión `.webp` pesando habitualmente menos de 150 KB.
   - El proceso debe ser transparente para el usuario y mostrar un indicador visual de procesamiento/carga.

---

### PLAN DE EJECUCIÓN SOLICITADO

Por favor, elabora y ejecuta el plan en 4 fases ordenadas:

#### Fase 1: Arquitectura, Naming y Supabase (Estabilidad ante todo)
1. Analizar si es necesario renombrar el proyecto localmente o crear una rama limpia para `pijamas-mafiro`.
2. Mantener la conexión a Supabase intacta mediante variables de entorno (`.env`).
3. Actualizar `index.html` con el nuevo favicon, título de página (`Pijamas MAFIRO | Catálogo Oficial`) y metaetiquetas OpenGraph para compartir en redes y WhatsApp.
4. Centralizar la variable del número de WhatsApp oficial (`59170095775`) en la configuración general.

#### Fase 2: Configuración del Sistema de Diseño (Design System)
1. Modificar `tailwind.config.js` (o variables CSS globales) para definir los nuevos tokens semánticos de color (`brand-pink`, `brand-purple`, `brand-yellow`, `brand-cream`, `brand-dark`).
2. Configurar tipografías amigables: una fuente redondeada para encabezados y destacados (estilo *Quicksand* o *Nunito* de Google Fonts) y una tipografía limpia y legible para descripciones y precios.

#### Fase 3: Rediseño de Vistas y Componentes (Frontend)
1. **Header / Navbar:** Integrar el logo circular de Mafiro, botón directo de WhatsApp al `59170095775` y acceso discreto al panel de administración.
2. **Hero Section / Banner de Bienvenida:** Mostrar el banner de la marca con el slogan *"Comodidad, estilo y ternura para cada momento"*, con elementos decorativos sutiles acordes al logo (estrellas, luna pastel).
3. **Tarjeta de Producto (Card):**
   - Adaptar las tarjetas al nuevo estilo visual (bordes redondeados, badges en tonos pastel, tipografía cálida de precios).
   - Mantener intacta la lógica de selector de colores y previsualización.
4. **Modal de Detalle de Prenda:**
   - Botón "Pedir por WhatsApp" que enlace directamente a `https://wa.me/59170095775?text=...` con el texto dinámico que incluya nombre de la prenda, color seleccionado y talla elegida.
   - Selector interactivo de tallas y colores manteniendo la reactividad.
5. **Panel de Administrador y Uploader WebP:**
   - Actualizar el formulario y tablas al nuevo esquema de colores sin alterar la lógica de mutaciones de datos en Supabase.
   - Integrar el conversor automático a WebP en el dropzone/input de imágenes antes del envío a Supabase Storage.

#### Fase 4: Pruebas de Regresión y Entrega
1. Verificar que no se hayan roto las operaciones CRUD (crear, editar, eliminar prendas).
2. Probar la compresión y subida de imágenes a Supabase Storage confirmando que se almacenen como `.webp`.
3. Comprobar que los enlaces de WhatsApp abran el chat con `59170095775` y el mensaje preformateado correcto.
4. Validar la respuesta visual en pantallas móviles (360px a 430px) y desktop.

Analiza la estructura actual del repositorio, presenta el plan de cambios detallado y procede a la implementación paso a paso.