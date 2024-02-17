/// <reference types="vitest" />
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    setupFiles: '/vitest.setup.ts',
    // https://vitest.dev/guide/environment.html 可以自定义环境
    environment: 'happy-dom',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [vue(), UnoCSS()],
})
