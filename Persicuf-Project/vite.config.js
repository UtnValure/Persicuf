import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://localhost:70',  // La URL de tu backend en .NET
        changeOrigin: true,
        secure: false, // Permite certificados autofirmados
      },
    },
  },
  plugins: [react()],
})
