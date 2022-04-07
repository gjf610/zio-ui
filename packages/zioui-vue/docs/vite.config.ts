import path from 'path'
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import svgLoader from 'vite-svg-loader'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@zioui', replacement: path.resolve(__dirname, '../zioui') }
    ]
  },
  plugins: [
    vueJsx(),
    svgLoader()
  ]
})