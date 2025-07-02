import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/react-heroes-marvel-dc/',
  build: {
    outDir: 'docs'
  },
  plugins: [react()],
})
