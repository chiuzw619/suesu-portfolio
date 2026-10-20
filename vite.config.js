import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

const page = (name) => fileURLToPath(new URL(name, import.meta.url))

export default defineConfig({
  // Separate HTML entries work on GitHub Pages without a router fallback.
  base: './',
  plugins: [vue(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        home: page('./index.html'),
        project: page('./project/index.html'),
        exhibition: page('./exhibition/index.html'),
        illustration: page('./illustration/index.html'),
        'graphic-design': page('./graphic-design/index.html'),
        contact: page('./contact/index.html'),
      },
    },
  },
})
