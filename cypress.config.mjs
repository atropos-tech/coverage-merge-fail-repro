import { defineConfig } from 'cypress';
import { devServer } from '@cypress/vite-dev-server';
import istanbulPlugin from 'vite-plugin-istanbul';
import codeCoverageTask from '@cypress/code-coverage/task.js';

export default defineConfig({
  video: false,
  component: {
    devServer(devServerConfig) {
      return devServer({
        ...devServerConfig,
        framework: 'react',
        viteConfig: {
          plugins: [
            istanbulPlugin({
              include: '**/*',
              exclude: ['node_modules'],
              extension: ['.tsx', '.ts'],
              // always do instrumentation
              requireEnv: false,
            }),
          ],
        },
      });
    },
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
    specPattern: ['src/**/*.cypress.tsx'],
  },
});
