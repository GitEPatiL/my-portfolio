import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    // Output directory (Vercel default expects 'dist')
    outDir: 'dist',

    // Raise chunk size warning threshold (default is 500kb — fine for a portfolio)
    chunkSizeWarningLimit: 700,

    rollupOptions: {
      output: {
        // Split vendor code into a separate chunk for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
})
