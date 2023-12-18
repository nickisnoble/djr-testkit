import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: 'src/lib/index.ts', // Replace with the path to your main Svelte component
      name: 'TypeTester', // The global variable name in the IIFE format
      fileName: (format) => `type-tester.${format}.js`
    },
    rollupOptions: {
      external: ['svelte'],
      output: {
        globals: {
          svelte: 'Svelte'
        }
      }
    }
  }
});