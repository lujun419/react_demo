import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import {createStyleImportPlugin,AntdResolve} from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
           createStyleImportPlugin({
            resolves:[AntdResolve]
           })],
  esbuild:{
    loader:'jsx',
  },
  optimizeDeps:{
    esbuildOptions:{
      loader:{
        '.js':'jsx',
      },
    },
  },
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src')
    }
  },
  // server:{
  //   host : '0.0.0.0',
  //   proxy:{
  //     '/api':{
  //       target:"http://10.0.40.200:8979",
  //       ws:false,
  //       changeOrigin:true,
  //       rewrite:path=> path.replace(/^\/api/,'')
  //     }
  //   }
  // }
})
