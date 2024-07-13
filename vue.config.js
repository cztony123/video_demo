const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://172.16.90.25:3000', // dev地址
                changeOrigin: true,
                pathRewrite: {
                  '^/api': '/api'
                }
            }
        }
    }
})