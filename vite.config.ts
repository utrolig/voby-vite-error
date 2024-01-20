import { defineConfig } from "vite";
import voby from "voby-vite";

const config = defineConfig({
  plugins: [
    voby({
      hmr: {
        enabled: true,
      },
    }),
  ],
});

export default config;
