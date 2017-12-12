// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const common = require("../webpack.common");

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      common.tsLoaderConfiguration,
      common.fileLoaderImageConfiguration,
      common.fileLoaderSoundConfiguration
    ],
  },
  resolve: {
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // `.web.js`.
    extensions: [ '.web.js', '.js', '.ts', '.web.ts', '.tsx', '.web.tsx' ],
    alias: {
      'react-native': 'react-native-web'
    }
  }
};
