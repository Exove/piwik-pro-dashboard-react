import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        // This sets the name for entry chunks (e.g., main bundle)
        entryFileNames: 'assets/[name].js',
        // This sets the name for additional chunks (e.g., dynamically imported modules)
        chunkFileNames: 'assets/[name].js',
        // This sets the name for asset files (e.g., CSS, images)
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
})
