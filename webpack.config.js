const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';
console.log('NODE_ENV11111111:',process.env.NODE_ENV,isProd);

module.exports = {
  mode: 'development',
  // mode: isProd ? 'production' : 'development',
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    ]
  },

  devtool: 'inline-source-map',
  
  // webpack-dev-server 配置
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    port: 8180
  },

  // plugins 配置
  plugins: [
    new cleanWebpackPlugin(['dist/*']),
    new htmlWebpackPlugin({
      title: 'React-Carousel',
      filename: 'index.html',
      template: './index-template.html',
      path: 'dist/'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}