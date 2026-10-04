import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic',
      babel: {
        plugins: [
          ["@babel/plugin-proposal-decorators", { legacy: true }],
          ["@babel/plugin-proposal-class-properties", { loose: true }]
        ]
      }
    })
  ],
  resolve: {
    alias: {
      pages: path.resolve(import.meta.dirname, 'src/pages/'),
      components: path.resolve(import.meta.dirname, 'src/components/'),
      actions: path.resolve(import.meta.dirname, 'src/redux/actions/'),
      store: path.resolve(import.meta.dirname, 'src/redux/store/'),
      reducers: path.resolve(import.meta.dirname, 'src/redux/reducers/'),
      modules: path.resolve(import.meta.dirname, 'src/modules/'),
      samples: path.resolve(import.meta.dirname, 'src/samples/'),
      utils: path.resolve(import.meta.dirname, 'src/utils/')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'dev'),
    'process.env.PROTOCOL': JSON.stringify(process.env.PROTOCOL || 'http://'),
    'process.env.API_HOST': JSON.stringify(process.env.API_HOST || (process.env.NODE_ENV === 'production' ? '139.59.92.196:80' : 'localhost:8081'))
  },
  server: {
    port: 8080
  }
});
