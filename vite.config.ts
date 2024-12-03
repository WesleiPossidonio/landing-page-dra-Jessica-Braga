import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-styled-components'],
      },
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
      renderLegacyChunks: false,
    }),
  ],
})
