const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin');
const notifier = require('node-notifier');
const agrv = require('yargs-parser')(process.argv.slice(2));

const port = 3003;

module.exports = {
  mode: 'development',

  devServer: {
    port,
    hot: true,
    historyApiFallback: true,
    // static: {
    //   directory: path.join(__dirname, '../dist'),
    // },
  },

  stats: 'errors-only',
  devtool: 'cheap-module-source-map',

  output: {
    publicPath: '/',
    filename: 'scripts/[name].bundle.js',
    assetModuleFilename: 'images/[name].[ext]',
  },

  plugins: [
    // 热更新，开启HMR
    new ReactRefreshPlugin(),

    // https://github.com/haoqunjiang/friendly-errors-webpack-plugin#readme
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:'+ port],
        notes: ['💊构建信息请及时关注窗口右上角'],
      },
      onErrors: (severity, errors) => {
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        notifier.notify({
          title: 'Webpack error',
          message: severity + ': ' + error.name,
          subtitle: error.file || '',
        });
      },
      clearConsole: true,
    }),

    // https://github.com/webpack-contrib/webpack-bundle-analyzer
    agrv.ana ? new BundleAnalyzerPlugin() : null,
  ],
};
