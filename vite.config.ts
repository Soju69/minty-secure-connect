import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const REPO_NAME = 'minty-secure-connect'; 

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // 🔑 ИСПРАВЛЕНО: Используются ОБРАТНЫЕ КАВЫЧКИ (``) вместо одинарных ('')
  base: mode === 'production' ? `/${REPO_NAME}/` : '/',
  
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

