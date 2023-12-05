// vite.config.js
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [Vue()],
  resolve: {
    alias: {
      '@': '/src', // Adjust the alias based on your project structure
    },
  },
});
