// Importa el CSS global que tienes en src/stories/tailwind.css
import "../src/stories/tailwind.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
};
