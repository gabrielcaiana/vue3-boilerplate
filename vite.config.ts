import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      deep: true,
      directoryAsNamespace: true,
			collapseSamePrefixes: true,
    })
  ],
  resolve: {
		alias: {
			'~': resolve(__dirname, './src'),
		},
	},
  server: {
    port: 3000
  }
})
