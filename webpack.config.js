module.exports = {
  entry: './src/index.jsx',
  output: {
    path: './www/js',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
