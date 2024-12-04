import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  output: 'export', // Ensures the app can be statically exported
  assetPrefix: './', // Adjusts asset paths for GitHub Pages
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Set limit to 1MB or any size you prefer
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});