const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [ './src/index.js' ],
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'index.bundle.js'
  },
devServer: {
    contentBase: './public',
    historyApiFallback: true,
    hot: true
  },
  module: {    
      rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      path.join(__dirname, 'node_modules')
    ]
  },
plugins: [
new webpack.HotModuleReplacementPlugin()
]
}