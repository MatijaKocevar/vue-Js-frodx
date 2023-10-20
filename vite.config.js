import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  base: "/vue-Js-frodx/",
  plugins: [vue(), mkcert()],
  server: {
    host: true,
    https: true,
    cors: true,
  },
})
