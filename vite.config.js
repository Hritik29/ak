import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ak/', // Update this with your repository name
  plugins: [react()],
});
