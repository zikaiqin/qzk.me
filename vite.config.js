/** @type {import('vite').UserConfig} */
import { resolve } from 'path'
import { defineConfig } from 'vite'

console.log(process.env, import.meta.env)

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
    __BUILD_DATE__: new Date(),
  }
})
