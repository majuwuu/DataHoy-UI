# datahoy-ui

UI component library / design system basada en Next.js y Storybook. Estructura basada en Atomic Design (atoms → molecules → organisms → templates → pages).

## Requisitos

- Node.js (LTS) + npm
- Git

Verifica versiones:

```bash
node -v
npm -v
```

## Instalación

Desde la raíz del proyecto:

```bash
cd "c:\Users\Majo\Desktop\datahoy-ui"
npm install
```

Si encuentras conflictos de peer deps en Windows, prueba:

```bash
npm install --legacy-peer-deps
```

## Desarrollo

- Iniciar la app Next.js:

```bash
npm run dev
```

- Iniciar Storybook:

```bash
npm run storybook
```

## Estructura relevante

- .storybook/ — configuración de Storybook (main.js, preview.js)
- src/components/atoms — componentes atómicos (ej. Button)
- src/components/molecules — componentes compuestos (ej. Card)
- src/stories — utilidades y CSS global para Storybook (tailwind.css)

## CSS global / Tailwind

El CSS global para Storybook está en `src/stories/tailwind.css`. Ajusta según tu configuración de Tailwind/Next.

## Publicar en npm

Antes de publicar, asegúrate de que `package.json` NO tenga `"private": true` y que el campo `name` sea único en npm o use un scope.

```bash
# iniciar sesión si hace falta
npm login

# publicar (pública)
npm publish --access public
```

Para paquetes privados o CI, añade un token en los secrets y usa `.npmrc`:

```text
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
```

## Uso local sin publicar

Conectar una librería local:

```bash
# en la carpeta de la librería
npm link
# en esta app
npm link nombre-de-tu-paquete
```

## Contribuir

- Sigue el patrón Atomic Design.
- Añade stories en `*.stories.*` junto al componente.
- Ejecuta Storybook para revisar visualmente.

## Notas

- Si Storybook muestra errores de resolución de CSS, verifica la ruta importada en `.storybook/preview.js`.
- Para resolver problemas de lockfile: elimina `node_modules` y `package-lock.json` y ejecuta `npm install`.

License: agrega la tuya si corresponde.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
