import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, Plugin } from 'vite'

type Target = {
  src: string
  dest: string
}

const copy = (target: Target[]): Plugin => ({
  name: 'Copy Files',
  async writeBundle() {
    target
      .map(({ src, dest }) => ({ src: resolve(src), dest: resolve(dest) }))
      .forEach(({ src, dest }: Target) => copyFileSync(src, dest))
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    copy([
      {
        src: './_redirects',
        dest: './dist/redirects'
      }
    ])
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
