import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Note will probably have to change base back to /p6/ for the project
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: "docs"
  }
})
