const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/', // static server path
    filename: 'scripts/[name].[contenthash:5].bundle.js',
    assetModuleFilename: 'images/[name].[contenthash:5].[ext]',
  },

  devtool: 'source-map',

  performance: {
    maxAssetSize: 250000, // 最大250kb
    maxEntrypointSize: 250000, // 入口文件最大250kb
    hints: 'warning', // 超出限制给出警告⚠️
  },

  optimization: {
    minimize: true,
    minimizer: [
      // https://webpack.js.org/plugins/css-minimizer-webpack-plugin/
      new CssMinimizerPlugin({
        parallel: true, // 开启多线程压缩
      }),
      // https://webpack.js.org/plugins/terser-webpack-plugin/
      new TerserPlugin({
        parallel: true, // 开启多线程压缩
        extractComments: false, // 不提取注释到单独的文件中
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true,
          },
          format: {
            comments: false, // 移除所有注释
          },
        },
      }),
    ],
  },

  plugins: [],
};
