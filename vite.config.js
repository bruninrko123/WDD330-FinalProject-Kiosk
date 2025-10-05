import { defineConfig } from "vite";

// export default defineConfig({
//   root: ".",
  
// });

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/WDD330-FinalProject-Kiosk/' : '/'
}));