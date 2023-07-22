import { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'
import packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      include: ['src/lib/'],
    }),
  ],
  build: {
    lib: {
      entry: resolve('src', 'lib/index.ts'),
      name: 'ReactDialogs',
      formats: ['es', 'umd'],
      fileName: (format) => `react-dialogs.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
})
