# Generación Victoria — Periódico Digital Escolar
**Unidad Educativa del Milenio Victoria del Portete**

---

## Estructura de carpetas

```
generacion-victoria/
├── index.html                        ← Página principal
├── css/styles.css                    ← Todos los estilos
├── js/main.js                        ← Carrusel, menú, interactividad
├── images/
│   ├── logo.png                      ← TU LOGO AQUÍ
│   ├── carousel/                     ← Imágenes del carrusel principal
│   │   ├── carousel-1.jpg            → slide 1 (Institucional)
│   │   ├── carousel-2.jpg            → slide 2 (Vida Estudiantil)
│   │   ├── carousel-3.jpg            → slide 3 (Deportes)
│   │   └── carousel-4.jpg            → slide 4 (Cultura y Arte)
│   ├── noticias-institucionales/
│   │   ├── noticia-inst-01-img1.jpg
│   │   ├── noticia-inst-01-img2.jpg
│   │   ├── noticia-inst-01-img3.jpg
│   │   ├── noticia-inst-02-img1.jpg
│   │   └── ...
│   ├── vida-estudiantil/             (prefijo: vest)
│   ├── academico/                    (prefijo: acad)
│   ├── cultura-arte/                 (prefijo: cult)
│   ├── deportes/                     (prefijo: dep)
│   ├── medio-ambiente/               (prefijo: amb)
│   ├── salud-bienestar/              (prefijo: salud)
│   ├── tecnologia/                   (prefijo: tech)
│   ├── opinion/                      (prefijo: op)
│   ├── reconocimientos/              (prefijo: reco)
│   ├── entretenimiento/              (prefijo: ent)
│   └── noticias-mundo/               (prefijo: mundo)
└── secciones/
    ├── noticias-institucionales.html
    ├── vida-estudiantil.html
    └── ... (12 páginas en total)
```

---

## Convención de nombres de imágenes

El formato es: `noticia-[PREFIJO]-[NUMERO]-img[1|2|3].jpg`

| Sección | Prefijo | Ejemplo noticia 3 |
|---|---|---|
| Noticias Institucionales | `inst` | `noticia-inst-03-img1.jpg` |
| Vida Estudiantil | `vest` | `noticia-vest-03-img1.jpg` |
| Académico | `acad` | `noticia-acad-03-img1.jpg` |
| Cultura y Arte | `cult` | `noticia-cult-03-img1.jpg` |
| Deportes | `dep` | `noticia-dep-03-img1.jpg` |
| Medio Ambiente | `amb` | `noticia-amb-03-img1.jpg` |
| Salud y Bienestar | `salud` | `noticia-salud-03-img1.jpg` |
| Tecnología | `tech` | `noticia-tech-03-img1.jpg` |
| Opinión | `op` | `noticia-op-03-img1.jpg` |
| Reconocimientos | `reco` | `noticia-reco-03-img1.jpg` |
| Entretenimiento | `ent` | `noticia-ent-03-img1.jpg` |
| Noticias por el Mundo | `mundo` | `noticia-mundo-03-img1.jpg` |

**Cada noticia tiene 3 imágenes:** img1, img2, img3.
Si no tienes las 3, igual ponle el nombre — se mostrará un ícono de placeholder.

---

## Cómo agregar una nueva noticia

1. Nombra tus imágenes con el formato correcto y ponlas en la carpeta de la sección
2. Abre el HTML de la sección correspondiente en `secciones/`
3. Busca el comentario `<!-- == AGREGAR NUEVAS NOTICIAS AQUI == -->`
4. Copia el bloque `<article class="article-card">...</article>` de una noticia anterior
5. Cambia: número de noticia en las imágenes, título, fecha, autor y texto
6. Guarda, haz `git add . && git commit -m "Nueva noticia: Título" && git push`
7. Vercel actualiza la página automáticamente en ~30 segundos

---

## Cómo actualizar el carrusel

El carrusel en `index.html` usa estas imágenes:
- `images/carousel/carousel-1.jpg` → slide 1
- `images/carousel/carousel-2.jpg` → slide 2
- `images/carousel/carousel-3.jpg` → slide 3
- `images/carousel/carousel-4.jpg` → slide 4

Para cambiar una imagen del carrusel: reemplaza el archivo `.jpg` con el mismo nombre.
Para cambiar el texto/título del carrusel: edita en `index.html` la sección `<!-- SLIDE N -->`.

---

## Logo

Coloca tu logo en `images/logo.png`. Se mostrará automáticamente en el header de todas las páginas.
Tamaño recomendado: altura 52px, fondo transparente (PNG).

---

## Despliegue en Vercel

1. `git add .`
2. `git commit -m "descripción del cambio"`
3. `git push origin main`
4. Vercel despliega automáticamente en ~30 segundos

---

## Contacto institucional
- **AMIE:** 01H00918
- **Teléfono:** (+593) 095 966 5893
- **Facebook:** https://www.facebook.com/unidadeducativadelmilenio.victoriadelportete.1/
- **Ubicación:** Victoria del Portete (Irquis), Cuenca, Azuay
