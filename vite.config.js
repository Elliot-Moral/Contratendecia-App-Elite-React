import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/react/',
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Esto permite que sea accesible desde cualquier dispositivo en tu red local
    port: 5173, // Opcional: puedes especificar el puerto si lo necesitas
  },
})

