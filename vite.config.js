import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Ye file Vite ko batati hai ke kaun se plugins use karne hain
export default defineConfig({
  plugins: [
    react(),        // React ko chalane ke liye
    tailwindcss(),  // Tailwind ko chalane ke liye
  ],
})