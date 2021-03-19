const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { HotModuleReplacementPlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

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
    },
  },
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
        ],
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
      filename: 'index.css',
      chunkFilename: '[id].css',
    }),
  ].concat(multipleHtmlPlugins),
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    port: 8000,
  },
}
