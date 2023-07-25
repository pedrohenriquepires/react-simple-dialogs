/// <reference types="vitest" />

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
      exclude: ['src/**/__tests__'],
    }),
  ],
  build: {
    lib: {
      entry: resolve('src', 'lib/index.ts'),
      name: 'ReactSimpleDialogs',
      formats: ['es', 'umd'],
      fileName: format => `react-simple-dialogs.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
})
