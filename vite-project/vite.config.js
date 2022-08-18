import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'http://localhost:3001/',
  server: {
    port: 3001,
    cors: true,
    origin: 'http://localhost:3001',
  },
  plugins: [react()]
})
