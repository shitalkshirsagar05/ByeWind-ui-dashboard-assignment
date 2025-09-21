import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

/**
 * Vite Configuration for Juspay Dashboard
 * 
 * Optimized build configuration with:
 * - React plugin with SWC for faster builds
 * - Path resolution for cleaner imports
 * - Bundle optimization settings
 * - Development server configuration
 * - Build optimization for production
 */
export default defineConfig({
  plugins: [
    react({
      // Enable SWC for faster compilation
      jsxRuntime: 'automatic',
    })
  ],
  
  // Path resolution for cleaner imports
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@types': resolve(__dirname, 'src/types'),
      '@constants': resolve(__dirname, 'src/constants'),
      '@data': resolve(__dirname, 'src/data'),
    },
  },
  
  // Development server configuration
  server: {
    port: 3000,
    open: true,
    host: true,
    cors: true,
  },
  
  // Build optimization
  build: {
    // Target modern browsers for better optimization
    target: 'esnext',
    
    // Output directory
    outDir: 'dist',
    
    // Generate sourcemaps for debugging
    sourcemap: process.env.NODE_ENV === 'development',
    
    // Rollup options for bundle optimization
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion'],
          'chart-vendor': ['recharts'],
          'icon-vendor': ['@fortawesome/react-fontawesome', '@fortawesome/free-solid-svg-icons'],
          
          // Feature chunks
          'dashboard': [
            './src/pages/Dashboard.tsx',
            './src/components/dashboard/Charts.tsx',
            './src/components/dashboard/KPICard.tsx',
          ],
        },
        
        // Asset file naming
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') ?? [];
          let extType = info[info.length - 1];
          
          // Group assets by type
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'images';
          } else if (/woff2?|eot|ttf|otf/i.test(extType)) {
            extType = 'fonts';
          }
          
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        
        // Chunk file naming
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    
    // Minification options
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === 'production',
        drop_debugger: process.env.NODE_ENV === 'production',
      },
    },
    
    // Chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
  
  // Dependency optimization
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      '@fortawesome/react-fontawesome',
    ],
    exclude: [
      'lucide-react',
    ],
  },
  
  // CSS configuration
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/variables.scss";`,
      },
    },
  },
  
  // Environment variables
  define: {
    __DEV__: process.env.NODE_ENV === 'development',
    __PROD__: process.env.NODE_ENV === 'production',
  },
  
  // Preview server configuration
  preview: {
    port: 4173,
    open: true,
  },
});
