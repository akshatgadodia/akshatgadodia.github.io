import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const existingConfig = defineConfig({
  plugins: [react()],
});

export default {
  ...existingConfig,
  build: {
    outDir: 'build',
  },
};
