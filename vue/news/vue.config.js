module.exports = {
  publicPath: './',

  devServer: {
    open: true,
    proxy: {
      // 配置跨域
      "/api": {
        target: 'http://v.juhe.cn/toutiao/index',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },

  baseUrl: './',
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined
}