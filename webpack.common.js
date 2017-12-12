const tsLoaderConfiguration = {
  test: /\.(tsx?)$/,
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
        outDir: "webroot",
        lib: ["dom", "ES2017"],
      }
    }
  }
}

// This is needed for webpack to import static images in JavaScript files
const fileLoaderImageConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'file-loader',
    options: {
      name: './images/[name].[ext]'
    }
  }
};

const fileLoaderSoundConfiguration = {
  test: /\.(ogg|mp3)$/,
  use: {
    loader: 'file-loader',
    options: {
      name: './sounds/[name].[ext]'
    }
  }
};

module.exports = {
  tsLoaderConfiguration,
  fileLoaderImageConfiguration,
  fileLoaderSoundConfiguration
}