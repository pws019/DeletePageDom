const CopyWebpackPlugin = require('copy-webpack-plugin') // 这里引入`这个CopyWebpackPlugin`插件


module.exports = {
  lintOnSave: false,
  outputDir: 'AdSafe',
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        { from: './src/chrome-plugin/*', flatten: true, }
      ])
    ]
  }
}
