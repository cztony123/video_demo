// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//     transpileDependencies: true,
//     devServer: {
//         proxy: {
//             '/api': {
//                 target: 'http://localhost:3000/', // dev地址
//                 changeOrigin: true,
//                 pathRewrite: {
//                   '^/api': '/api'
//                 }
//             }
//         }
//     }
// })

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8888, //端口
    open: true, //是否启动后浏览器自动打开
    https: false, //
    host: "localhost" //主机名
  },
  lintOnSave: false,//是否在保存的时候使用 `eslint-loader` 进行检查
  productionSourceMap: false//打包时不生成map文件，加快打包构建
})
