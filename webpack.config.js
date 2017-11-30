const path = require("path");
const webpack = require("webpack");

const tsLoaderConfiguration = {
  test: /\.(tsx?|js)$/,
  exclude: [
    "/node_modules/"
  ],
  use: {
    loader: 'ts-loader',
    options: {
      compilerOptions: { // overwrite tsconfig.json
        allowJs: true,
        target: "ES5",
        jsx: "react",
        outDir: "web"
      }
    }
  }
}

// This is needed for webpack to import static images in JavaScript files
const fileLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'file-loader',
    options: {
      name: './images/[name].[ext]'
    }
  }
};

module.exports = {
  devServer: {
    publicPath: '/',
    port: 5555,
    contentBase: path.join(__dirname, 'web')
  },
  entry: './src/web/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'web')
  },
  module: {
    rules: [
      tsLoaderConfiguration,
      fileLoaderConfiguration
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