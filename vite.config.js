import { defineConfig } from "vite";
import { resolve } from 'path';

export default defineConfig({
  root: "src/",
  base: "/WDD330-FinalProject-Kiosk/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/about.html"),
        order: resolve(__dirname, "src/order/index.html"),
        service_listing: resolve(__dirname, "src/service_listing/index.html"),
        menu: resolve(__dirname, "src/service_listing/menu.html"),
        service_pages: resolve(__dirname, "src/service_pages/index.html"),
      },
    },
  },
});

// export default defineConfig(({ command }) => ({
//   // base: command === 'build' ? '/WDD330-FinalProject-Kiosk/' : '/'
//   base: '/'
// }));