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
