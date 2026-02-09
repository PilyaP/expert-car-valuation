// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
// import path from 'path'

// export default defineConfig({
//   plugins: [react()],
// resolve: {
//   extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
//   alias: {
//     '@': path.resolve(__dirname, './src'),
//   },
// },
// build: {
//   target: 'esnext',
//   outDir: 'dist',
//   emptyOutDir: true,
//   rollupOptions: {
//     output: {
//       manualChunks: {
//         vendor: ['react', 'react-dom'],
//       },
//     },
//   },
// },
//   server: { port: 3000, open: true }
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig(async () => {
  const tailwindcss = (await import('@tailwindcss/vite')).default

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'dist',
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
          },
        },
      },
    },
    server: { port: 3000, open: true },
  }
})
