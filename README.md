# 🌐 Samuel — Portafolio web personal

Sitio profesional **responsive** construido con **HTML, CSS y JavaScript sin frameworks ni instalación**. Incluye foto formal, presentación, proyectos con filtros por especialidad, stack, información personal, botones de contacto y CV inicial.

## Vista rápida
Abre `index.html` en Chrome, Edge o Firefox. Para verlo con recarga automática en VS Code, instala **Live Server** y elige **Open with Live Server**.

## ⚠️ Personalización obligatoria antes de publicar
Edita `assets/js/config.js`:

```js
window.PORTFOLIO_CONFIG = {
  nombre: 'Samuel',
  correo: 'TU_CORREO_REAL@gmail.com',
  githubUser: 'TU_USUARIO_GITHUB',
  linkedinUrl: '',
  proyectos: [ /* ... */ ]
};
```

- `githubUser`: sólo el usuario (por ejemplo `samuel123`), sin `https://github.com/`.
- `correo`: activa el enlace **Escríbeme** con `mailto:`.
- `repo`: cambia cada valor si tus repositorios se llaman distinto. Los enlaces sólo apuntarán al sitio correcto cuando hayas subido esos repositorios a tu cuenta.
- Cambia `assets/CV_Samuel_Calderon_Profesional_2026.pdf` por el CV definitivo **con tus datos personales completos**. El actual contiene campos que debes editar.
- Si prefieres no mostrar foto personal públicamente, elimina o reemplaza `assets/img/retrato-profesional.jpg` y actualiza el `img` de `index.html`.
- Revisa la experiencia y tecnologías listadas y elimina cualquier habilidad que todavía no domines.

## Publicar gratis en GitHub Pages
1. Crea un repositorio público llamado `Portafolio-Personal`.
2. Sube **el contenido de esta carpeta** al repositorio (con `index.html` en la raíz).
3. Abre GitHub → repositorio → **Settings → Pages**.
4. En **Build and deployment**, configura **Deploy from a branch**, `main` y carpeta `/ (root)`; guarda.
5. GitHub mostrará tu URL pública, normalmente `https://TU_USUARIO.github.io/Portafolio-Personal/`.

Si cambias el nombre del repositorio, también cambiará la URL de Pages.

## Cómo agregar nuevos proyectos
En el arreglo `proyectos` de `assets/js/config.js` incorpora un objeto con `titulo`, `categoria` (`datos`, `desarrollo` o `web`), `etiqueta`, `descripcion`, `tecnologias`, `repo`, `simbolo` y `color`. Las tarjetas se generan automáticamente y se pueden filtrar.

## Mejoras posibles
- Sustituir placeholders por enlaces reales y un CV actualizado.
- Incorporar capturas reales de tus aplicaciones en las tarjetas.
- Registrar dominio propio y añadir SEO / Open Graph al desplegar.
- Añadir versiones en inglés sólo si te resulta útil profesionalmente.

## Stack y compatibilidad
Sitio 100 % estático. No requiere Node.js, npm, servidor backend ni base de datos. La fuente Google Fonts es opcional: si no hay Internet se usa una fuente de sistema. No hay formulario de contacto que finja enviar mensajes: utiliza un enlace de correo.
