import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // manualChunks is for client build only
        ...(isSsrBuild ? {} : {
          manualChunks: {
            'vendor-react': ['react', 'react-dom'],
            'vendor-motion': ['framer-motion'],
          },
        }),
      },
    },
  },
}));
