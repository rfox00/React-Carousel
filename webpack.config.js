const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

console.log('NODE_ENV11111111:',process.env.NODE_ENV);


module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js',
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
      }
    ]
  },
  
  // webpack-dev-server 配置
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8180
  },

  // plugins 配置
  plugins: [
    new htmlWebpackPlugin({
      title: 'Output Management',
      filename: 'index.html',
      template: './index-template.html',
      inject: 'true',
      path: 'dist/'
    })
  ]
}