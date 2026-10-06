import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
<<<<<<< HEAD
=======
      jsxRuntime: 'classic',
>>>>>>> master
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
<<<<<<< HEAD
    'process.env.PROTOCOL': JSON.stringify(process.env.PROTOCOL || (process.env.NODE_ENV === 'production' ? 'https://' : 'http://')),
=======
    'process.env.PROTOCOL': JSON.stringify(process.env.PROTOCOL || 'http://'),
>>>>>>> master
    'process.env.API_HOST': JSON.stringify(process.env.API_HOST || (process.env.NODE_ENV === 'production' ? 'api.imdbnator.com' : 'localhost:8081'))
  },
  server: {
    port: 8080
  }
});
