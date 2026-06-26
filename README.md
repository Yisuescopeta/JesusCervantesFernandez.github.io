# Portfolio de Jesús

Portfolio profesional desarrollado con Astro y preparado para publicarse en GitHub Pages.

La página presenta mi perfil como desarrollador fullstack en formación, mis intereses principales y una sección de proyectos destacando el TFG `MotorVideojuegosIA`.

## Tecnologías

- Astro
- HTML y CSS
- GitHub Pages

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

Astro mostrará una URL local, normalmente `http://localhost:4321`.

## Build de producción

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

Este portfolio está configurado para desplegarse como repositorio de proyecto en GitHub Pages dentro de `Yisuescopeta/JesusCervantesFernandez.github.io`:

```js
site: 'https://yisuescopeta.github.io',
base: '/JesusCervantesFernandez.github.io',
```

La URL publicada esperada es:

```js
https://yisuescopeta.github.io/JesusCervantesFernandez.github.io/
```

En GitHub, activa Pages usando GitHub Actions como fuente de despliegue.
