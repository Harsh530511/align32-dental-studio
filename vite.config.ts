import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    // This tells the underlying Nitro server to use the Vercel adapter
    // instead of the default Cloudflare one.
    nitro: {
      preset: 'vercel'
    }
  }
});
