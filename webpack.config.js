const path = require("path");
const webpack = require("webpack");
const common = require("./webpack.common");

module.exports = {
  devServer: {
    publicPath: '/',
    port: 5555,
    contentBase: path.join(__dirname, 'webroot')
  },
  entry: './src/web/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'webroot')
  },
  module: {
    rules: [
      common.tsLoaderConfiguration,
      common.fileLoaderImageConfiguration,
      common.fileLoaderSoundConfiguration
    ]
  },

  plugins: [
    // `process.env.NODE_ENV === 'production'` must be `true` for production
    // builds to eliminate development checks and reduce build size. You may
    // wish to include additional optimizations.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],

  resolve: {
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // `.web.js`.
    extensions: [ '.web.js', '.js', '.ts', '.web.ts', '.tsx', '.web.tsx' ],
    alias: {
      'react-native': 'react-native-web'
    }
  }
}