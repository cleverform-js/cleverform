// ===================== ||     Clever FORM UMD webpack Config   || =====================//

const webpack = require('webpack');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const path = require('path')

const PACKAGE = require("../package.json");
const NAME = PACKAGE.name;
const VERSION = PACKAGE.version;
const AUTHOR = PACKAGE.author;

module.exports = {
  name: NAME,
  entry: {
    [`${NAME}-${VERSION}`]: "./src/index.ts", // for development, uncompressed
    [`${NAME}-${VERSION}.min`]: "./src/index.ts", // for production, minified
  },
  //   devtool: "inline-source-map",
  // devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: `js/[name].js`,

    globalObject: "this", // for window and NODE???
    libraryTarget: "umd", // Universal
    library: "CleverForm", // Library name //CleverForm , must be CamelCase for the library name in the global namespace
    libraryExport: "default",
    umdNamedDefine: true,

    auxiliaryComment: {
      root: "Root...",
      commonjs: "CommonJS...",
      commonjs2: "CommonJS2...",
      amd: "AMD...",
    },

    // sourcePrefix: 'XXXXXX-XXXXXX\t',
  },

  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        // minified only the with '.min' extentions
        include: /\.min\.js$/,
      }),
    ],
  },

  // mode: 'development', // production  // can be blank and be put to npm script like 'webpack --mode production

  // devServer: {
  //     contentBase: './dist'
  // },

  module: {
    rules: [
      // //rules for JS files // before adding TS support
      // {
      //     test: /\.js$/,
      //     exclude: /node_modules/,
      //     use: {
      //         loader: 'babel-loader'
      //     }
      // }

      //rules for TS files
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new webpack.BannerPlugin(`
CleverForm version: ${require("../package.json").version}
(c) 2020 ${AUTHOR}.
Released under the MIT License.
        `),
  ],

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};