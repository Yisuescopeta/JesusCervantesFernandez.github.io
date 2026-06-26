# Portfolio de Jesus

Portfolio profesional desarrollado con Astro y preparado para publicarse en GitHub Pages.

La pagina presenta mi perfil como desarrollador fullstack, mis intereses principales y una seccion de proyectos destacando el TFG `MotorVideojuegosIA`.

## Tecnologias

- Astro
- HTML y CSS
- GitHub Pages

## Instalacion

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

Astro mostrara una URL local, normalmente `http://localhost:4321`.

## Build de produccion

```bash
npm run build
```

El resultado se genera en la carpeta `dist/`.

## Previsualizar el build

```bash
npm run preview
```

## Despliegue en GitHub Pages

El proyecto incluye el workflow `.github/workflows/deploy.yml`, que construye y despliega el portfolio al publicar cambios en `main` o `master`.

Este portfolio calcula el `base` automaticamente segun el entorno de despliegue:

```js
site: process.env.SITE_URL ?? 'https://yisuescopeta.github.io',
base: repository && !isUserSiteRepository ? `/${repository}` : '/',
```

Comportamiento esperado:

- En GitHub Pages para el repositorio `Yisuescopeta/JesusCervantesFernandez.github.io`, el sitio se publica bajo `https://yisuescopeta.github.io/JesusCervantesFernandez.github.io/`.
- En despliegues en dominio raiz, preview local o cualquier entorno sin `GITHUB_REPOSITORY`, el sitio usa `/` como base y evita la redireccion a una subruta inexistente.
- Si necesitas fijar el dominio canonico, define `SITE_URL` en el entorno de despliegue.

En GitHub, activa Pages usando GitHub Actions como fuente de despliegue.
