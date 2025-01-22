import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    snapshotFormat: {
      callToJSON: true,
    },
  },
});
