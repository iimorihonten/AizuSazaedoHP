import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/AizuSazaedoHP/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name ? path.parse(assetInfo.name) : { ext: '', name: 'unknown' };
          if (/\.(gif|jpe?g|png|svg)$/i.test(info.ext)) {
            return `assets/images/${info.name}${info.ext}`;
          }
          return `assets/[name]-[hash]${info.ext}`;
        },
      },
    },
    assetsInlineLimit: 0, // Disable inline assets
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  optimizeDeps: {
    include: ['@/assets/*'],
  },
}));
