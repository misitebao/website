module.exports = {
  // 打包后静态资源根路径
  // publicPath: 'https://blog.misitebao.com/',
  assetsDir: '',
  // 打包文件hash
  filenameHashing: false,
  // 抽取css生成文件
  css: {
    extract: "true"
  },
  productionSourceMap: false,
  pages: {
    index: {
      // page 的入口
      entry: 'src/assets/js/index.js',
      // 模板来源
      template: 'src/pages/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      title: 'Homepage',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
      minify: false
    }
  },
  configureWebpack: {
    // 设置外部依赖
    externals: {
      'vue/dist/vue.esm-bundler.js': 'Vue'
    }
  }
};