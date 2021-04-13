const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { HotModuleReplacementPlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const dotenv = require('dotenv')

const htmlPageNames = ['embed']

const multipleHtmlPlugins = htmlPageNames.map((name) => {
  return new HtmlWebpackPlugin({
    template: path.resolve(__dirname, `public/${name}.html`),
    filename: `${name}.html`,
    chunks: [`${name}`],
  })
})

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
    embed: path.resolve(__dirname, 'src/embed.js'),
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    library: {
      name: 'Glossary',
      type: 'var',
    },
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      Api: path.resolve(__dirname, './src/Api'),
      Components: path.resolve(__dirname, './src/Components'),
      Theme: path.resolve(__dirname, './src/Theme'),
    },
  },
  // devtool: 'inline-source-map',
  mode: 'production',
  // globalThis.window.location.host.indexOf('localhost') !== -1
  //   ? 'production'
  //   : 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|svg)$/i,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
      chunks: ['index'],
    }),
    new MiniCssExtractPlugin({
      filename: 'index.scss',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
  ].concat(multipleHtmlPlugins),
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    port: 8000,
  },
}
