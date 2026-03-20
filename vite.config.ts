import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

export default defineConfig(({ mode }) => ({
  base: process.env.CUSTOM_DOMAIN ? '/' : (mode === 'production' ? '/AizuSazaedoHP/' : '/'),
  server: {
    port: 5180,
    strictPort: true
  },
  preview: {
    port: 5180,
    strictPort: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
