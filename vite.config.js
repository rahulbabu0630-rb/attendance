import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(), // Make sure this is properly imported and invoked
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  
});