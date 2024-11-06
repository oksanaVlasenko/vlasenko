import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import createSvgSpritePlugin from 'vite-plugin-svg-spriter'

import path from 'path'

const SRC_PATH = path.resolve(__dirname, 'src')
const SVG_FOLDER_PATH = path.resolve(SRC_PATH, 'assets', 'icons')

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  
  plugins: [
    createSvgSpritePlugin({svgFolder: SVG_FOLDER_PATH}), 
    vue()
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
