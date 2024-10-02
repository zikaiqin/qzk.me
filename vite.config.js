/** @type {import('vite').UserConfig} */
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        '404': resolve(__dirname, '404.html'),
      },
    },
  },
  define: {
    __RESUME_URL__: process.env.NODE_ENV === 'production' ? `'${import.meta.env.RESUME_URL}'` : "'#'", 
    __BUILD_DATE__: new Date(),
  }
})
