import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      // easier compatibility with Cypress coverage
      provider: 'istanbul',
      reportsDirectory: './coverage/vitest',
      include: ['src/**'],
      reportOnFailure: true,
    },
  },
});
