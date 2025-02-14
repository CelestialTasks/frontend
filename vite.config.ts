import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { checker } from 'vite-plugin-checker'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
    assetsInlineLimit: 0,
  },
  plugins: [react(), viteTsconfigPaths(), checker({ typescript: true }), tailwindcss()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
