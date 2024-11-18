const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
// const WebpackBar = require('webpackbar');
// const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { ThemedProgressPlugin } = require('themed-progress-plugin');
const agrv = require('yargs-parser')(process.argv.slice(2));

const _mode = agrv.mode || 'development';
const _modeFlag = _mode === 'production' ? true : false;
const tplMode = _modeFlag ? 'production' : 'development';
const _mergeConfig = require(`./config/webpack.${_mode}.js`);

const webpackBaseConfig = {
  entry: {
    main: path.resolve(__dirname, 'src/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    // Use tsconfig paths
    // https://github.com/dividab/tsconfig-paths-webpack-plugin
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, 'tsconfig.json'),
      }),
    ],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
    fallback: {},
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'swc-loader',
        },
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules'),
        ],
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    // https://github.com/unjs/webpackbar#readme
    // new WebpackBar(),

    // https://github.com/clessg/progress-bar-webpack-plugin#readme
    // new ProgressBarPlugin(),

    // https://github.com/01taylop/themed-progress-plugin#readme
    new ThemedProgressPlugin(),

    // https://github.com/johnagan/clean-webpack-plugin
    new CleanWebpackPlugin(),

    // https://github.com/jantimon/html-webpack-plugin
    new HtmlWebpackPlugin({
      title: '',
      filename: 'index.html',
      favicon: './public/favicon.ico',
      template: path.resolve(__dirname, 'src/index.'+ tplMode +'.html'),
    }),

    // https://webpack.js.org/plugins/mini-css-extract-plugin/
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash:5].css',
      chunkFilename: 'styles/[name].[contenthash:5].css',
      ignoreOrder: false,
    }),
  ],
};

module.exports = merge.default(webpackBaseConfig, _mergeConfig);
