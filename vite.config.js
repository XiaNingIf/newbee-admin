import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vitePluginImport from 'vite-plugin-babel-import'

// https://vitejs.dev/config/
export default ({mode}) => defineConfig({
    plugins: [
        vue(),
        vitePluginImport([
            {
                libraryName: 'element-plus',
                libraryDirectory: 'es',
                style(name) {
                    return `element-plus/lib/theme-chalk/${name}.css`;
                },
            }
        ])
    ],
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './'),
            '@': path.resolve(__dirname, 'src')
        },
    },
    base: './',
    server: {
        proxy: {
            '/api': {
                // target: 'http://localhost:28019/manage-api/v1',
                target: 'http://localhost:28019/manage-api/v1',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            }
        }
    }
})
