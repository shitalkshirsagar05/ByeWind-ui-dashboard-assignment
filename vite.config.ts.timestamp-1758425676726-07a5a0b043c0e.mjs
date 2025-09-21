// vite.config.ts
import { defineConfig } from "file:///D:/Linkden%20Projects/Juspay%20Dashboard/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Linkden%20Projects/Juspay%20Dashboard/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
var __vite_injected_original_dirname = "D:\\Linkden Projects\\Juspay Dashboard";
var vite_config_default = defineConfig({
  plugins: [
    react({
      // Enable SWC for faster compilation
      jsxRuntime: "automatic"
    })
  ],
  // Path resolution for cleaner imports
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "src"),
      "@components": resolve(__vite_injected_original_dirname, "src/components"),
      "@pages": resolve(__vite_injected_original_dirname, "src/pages"),
      "@hooks": resolve(__vite_injected_original_dirname, "src/hooks"),
      "@utils": resolve(__vite_injected_original_dirname, "src/utils"),
      "@types": resolve(__vite_injected_original_dirname, "src/types"),
      "@constants": resolve(__vite_injected_original_dirname, "src/constants"),
      "@data": resolve(__vite_injected_original_dirname, "src/data")
    }
  },
  // Development server configuration
  server: {
    port: 3e3,
    open: true,
    host: true,
    cors: true
  },
  // Build optimization
  build: {
    // Target modern browsers for better optimization
    target: "esnext",
    // Output directory
    outDir: "dist",
    // Generate sourcemaps for debugging
    sourcemap: process.env.NODE_ENV === "development",
    // Rollup options for bundle optimization
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          // Vendor chunks
          "react-vendor": ["react", "react-dom"],
          "animation-vendor": ["framer-motion"],
          "chart-vendor": ["recharts"],
          "icon-vendor": ["@fortawesome/react-fontawesome", "@fortawesome/free-solid-svg-icons"],
          // Feature chunks
          "dashboard": [
            "./src/pages/Dashboard.tsx",
            "./src/components/dashboard/Charts.tsx",
            "./src/components/dashboard/KPICard.tsx"
          ]
        },
        // Asset file naming
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split(".") ?? [];
          let extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "images";
          } else if (/woff2?|eot|ttf|otf/i.test(extType)) {
            extType = "fonts";
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        // Chunk file naming
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js"
      }
    },
    // Minification options
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === "production",
        drop_debugger: process.env.NODE_ENV === "production"
      }
    },
    // Chunk size warning limit
    chunkSizeWarningLimit: 1e3
  },
  // Dependency optimization
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "framer-motion",
      "@fortawesome/react-fontawesome"
    ],
    exclude: [
      "lucide-react"
    ]
  },
  // CSS configuration
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/variables.scss";`
      }
    }
  },
  // Environment variables
  define: {
    __DEV__: process.env.NODE_ENV === "development",
    __PROD__: process.env.NODE_ENV === "production"
  },
  // Preview server configuration
  preview: {
    port: 4173,
    open: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxMaW5rZGVuIFByb2plY3RzXFxcXEp1c3BheSBEYXNoYm9hcmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXExpbmtkZW4gUHJvamVjdHNcXFxcSnVzcGF5IERhc2hib2FyZFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovTGlua2RlbiUyMFByb2plY3RzL0p1c3BheSUyMERhc2hib2FyZC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcblxuLyoqXG4gKiBWaXRlIENvbmZpZ3VyYXRpb24gZm9yIEp1c3BheSBEYXNoYm9hcmRcbiAqIFxuICogT3B0aW1pemVkIGJ1aWxkIGNvbmZpZ3VyYXRpb24gd2l0aDpcbiAqIC0gUmVhY3QgcGx1Z2luIHdpdGggU1dDIGZvciBmYXN0ZXIgYnVpbGRzXG4gKiAtIFBhdGggcmVzb2x1dGlvbiBmb3IgY2xlYW5lciBpbXBvcnRzXG4gKiAtIEJ1bmRsZSBvcHRpbWl6YXRpb24gc2V0dGluZ3NcbiAqIC0gRGV2ZWxvcG1lbnQgc2VydmVyIGNvbmZpZ3VyYXRpb25cbiAqIC0gQnVpbGQgb3B0aW1pemF0aW9uIGZvciBwcm9kdWN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCh7XG4gICAgICAvLyBFbmFibGUgU1dDIGZvciBmYXN0ZXIgY29tcGlsYXRpb25cbiAgICAgIGpzeFJ1bnRpbWU6ICdhdXRvbWF0aWMnLFxuICAgIH0pXG4gIF0sXG4gIFxuICAvLyBQYXRoIHJlc29sdXRpb24gZm9yIGNsZWFuZXIgaW1wb3J0c1xuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKSxcbiAgICAgICdAY29tcG9uZW50cyc6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2NvbXBvbmVudHMnKSxcbiAgICAgICdAcGFnZXMnOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wYWdlcycpLFxuICAgICAgJ0Bob29rcyc6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2hvb2tzJyksXG4gICAgICAnQHV0aWxzJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvdXRpbHMnKSxcbiAgICAgICdAdHlwZXMnOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy90eXBlcycpLFxuICAgICAgJ0Bjb25zdGFudHMnOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9jb25zdGFudHMnKSxcbiAgICAgICdAZGF0YSc6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2RhdGEnKSxcbiAgICB9LFxuICB9LFxuICBcbiAgLy8gRGV2ZWxvcG1lbnQgc2VydmVyIGNvbmZpZ3VyYXRpb25cbiAgc2VydmVyOiB7XG4gICAgcG9ydDogMzAwMCxcbiAgICBvcGVuOiB0cnVlLFxuICAgIGhvc3Q6IHRydWUsXG4gICAgY29yczogdHJ1ZSxcbiAgfSxcbiAgXG4gIC8vIEJ1aWxkIG9wdGltaXphdGlvblxuICBidWlsZDoge1xuICAgIC8vIFRhcmdldCBtb2Rlcm4gYnJvd3NlcnMgZm9yIGJldHRlciBvcHRpbWl6YXRpb25cbiAgICB0YXJnZXQ6ICdlc25leHQnLFxuICAgIFxuICAgIC8vIE91dHB1dCBkaXJlY3RvcnlcbiAgICBvdXREaXI6ICdkaXN0JyxcbiAgICBcbiAgICAvLyBHZW5lcmF0ZSBzb3VyY2VtYXBzIGZvciBkZWJ1Z2dpbmdcbiAgICBzb3VyY2VtYXA6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxuICAgIFxuICAgIC8vIFJvbGx1cCBvcHRpb25zIGZvciBidW5kbGUgb3B0aW1pemF0aW9uXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIC8vIE1hbnVhbCBjaHVua3MgZm9yIGJldHRlciBjYWNoaW5nXG4gICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgIC8vIFZlbmRvciBjaHVua3NcbiAgICAgICAgICAncmVhY3QtdmVuZG9yJzogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcbiAgICAgICAgICAnYW5pbWF0aW9uLXZlbmRvcic6IFsnZnJhbWVyLW1vdGlvbiddLFxuICAgICAgICAgICdjaGFydC12ZW5kb3InOiBbJ3JlY2hhcnRzJ10sXG4gICAgICAgICAgJ2ljb24tdmVuZG9yJzogWydAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnLCAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ10sXG4gICAgICAgICAgXG4gICAgICAgICAgLy8gRmVhdHVyZSBjaHVua3NcbiAgICAgICAgICAnZGFzaGJvYXJkJzogW1xuICAgICAgICAgICAgJy4vc3JjL3BhZ2VzL0Rhc2hib2FyZC50c3gnLFxuICAgICAgICAgICAgJy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL0NoYXJ0cy50c3gnLFxuICAgICAgICAgICAgJy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL0tQSUNhcmQudHN4JyxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLy8gQXNzZXQgZmlsZSBuYW1pbmdcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCBpbmZvID0gYXNzZXRJbmZvLm5hbWU/LnNwbGl0KCcuJykgPz8gW107XG4gICAgICAgICAgbGV0IGV4dFR5cGUgPSBpbmZvW2luZm8ubGVuZ3RoIC0gMV07XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gR3JvdXAgYXNzZXRzIGJ5IHR5cGVcbiAgICAgICAgICBpZiAoL3BuZ3xqcGU/Z3xzdmd8Z2lmfHRpZmZ8Ym1wfGljby9pLnRlc3QoZXh0VHlwZSkpIHtcbiAgICAgICAgICAgIGV4dFR5cGUgPSAnaW1hZ2VzJztcbiAgICAgICAgICB9IGVsc2UgaWYgKC93b2ZmMj98ZW90fHR0ZnxvdGYvaS50ZXN0KGV4dFR5cGUpKSB7XG4gICAgICAgICAgICBleHRUeXBlID0gJ2ZvbnRzJztcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIGBhc3NldHMvJHtleHRUeXBlfS9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdYDtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8vIENodW5rIGZpbGUgbmFtaW5nXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiAnYXNzZXRzL2pzL1tuYW1lXS1baGFzaF0uanMnLFxuICAgICAgICBlbnRyeUZpbGVOYW1lczogJ2Fzc2V0cy9qcy9bbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcbiAgICAvLyBNaW5pZmljYXRpb24gb3B0aW9uc1xuICAgIG1pbmlmeTogJ3RlcnNlcicsXG4gICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgZHJvcF9jb25zb2xlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICAgICAgICBkcm9wX2RlYnVnZ2VyOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFxuICAgIC8vIENodW5rIHNpemUgd2FybmluZyBsaW1pdFxuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMTAwMCxcbiAgfSxcbiAgXG4gIC8vIERlcGVuZGVuY3kgb3B0aW1pemF0aW9uXG4gIG9wdGltaXplRGVwczoge1xuICAgIGluY2x1ZGU6IFtcbiAgICAgICdyZWFjdCcsXG4gICAgICAncmVhY3QtZG9tJyxcbiAgICAgICdmcmFtZXItbW90aW9uJyxcbiAgICAgICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnLFxuICAgIF0sXG4gICAgZXhjbHVkZTogW1xuICAgICAgJ2x1Y2lkZS1yZWFjdCcsXG4gICAgXSxcbiAgfSxcbiAgXG4gIC8vIENTUyBjb25maWd1cmF0aW9uXG4gIGNzczoge1xuICAgIGRldlNvdXJjZW1hcDogdHJ1ZSxcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBzY3NzOiB7XG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgQGltcG9ydCBcInNyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtgLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBcbiAgLy8gRW52aXJvbm1lbnQgdmFyaWFibGVzXG4gIGRlZmluZToge1xuICAgIF9fREVWX186IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxuICAgIF9fUFJPRF9fOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICB9LFxuICBcbiAgLy8gUHJldmlldyBzZXJ2ZXIgY29uZmlndXJhdGlvblxuICBwcmV2aWV3OiB7XG4gICAgcG9ydDogNDE3MyxcbiAgICBvcGVuOiB0cnVlLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdTLFNBQVMsb0JBQW9CO0FBQ3JVLE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFGeEIsSUFBTSxtQ0FBbUM7QUFjekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBO0FBQUEsTUFFSixZQUFZO0FBQUEsSUFDZCxDQUFDO0FBQUEsRUFDSDtBQUFBO0FBQUEsRUFHQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLE1BQzdCLGVBQWUsUUFBUSxrQ0FB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
