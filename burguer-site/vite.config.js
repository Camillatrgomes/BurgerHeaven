import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), gsap.registerPlugin(ScrollTrigger) 

(),],
})
