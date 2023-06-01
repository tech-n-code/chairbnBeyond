import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
  server: {
    proxy: {
      '/api/gallery/': 'http://localhost:3010',
      '/api/title/': 'http://localhost:3050',
      '/api/users/': 'http://localhost:4001',
      '/api/hosts/': 'http://localhost:4001',
      '/api/reviews/': 'http://localhost:3005',
      'api/about/': 'http://localhost:3003',
      '/api/amenities/': 'http://localhost:3002',
      '/api/location/': 'http://localhost:4000',
    },
  }
});
