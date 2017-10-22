module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        text: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}
