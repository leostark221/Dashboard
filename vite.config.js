import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Buffer } from 'buffer'

// Set global Buffer to use the polyfill
global.Buffer = Buffer;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add this line to alias 'buffer' to the installed polyfill
      buffer: 'buffer',
    },
  },
})
