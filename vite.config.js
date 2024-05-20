// import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


export default defineConfig({
  esbuild: {
    jsxFactory: 'jsx',
    jsxInject: "import jsx from '@/jsx.js'",
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [
    // legacy({
    //   targets: ['defaults', 'not IE 11'],
    // }),
    ViteImageOptimizer({
      dir: 'public/img',
      outDir: 'dist/img',
      jpg: {
        quality: 85,
      },
      png: {
        quality: 85,
      },
      webp: {
        quality: 85,
      },
      avif: {
        quality: 70,
      }
    }),
  ],
});