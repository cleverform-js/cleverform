const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const PACKAGE = require("../package.json");
const NAME = PACKAGE.name;
const VERSION = PACKAGE.version;
const AUTHOR = PACKAGE.author;

// const cleverFormDir = `js/${NAME}-${VERSION}.js`; // the used cleverform in <script> tag, unminified version
const cleverFormDir = `js/${NAME}-${VERSION}.min.js`; // the used cleverform in <script> tag, minified version

let playgroundDir = "./src/playground/";

// ===================== ||     Playground webpack Config   || =====================//
module.exports = {
  name: "playground",

  entry: {
    index: [playgroundDir + "js/index.js"],
    bootstrap: [playgroundDir + "js/bootstrap-validation.js"],
    simplest: [playgroundDir + "js/simplest.js"],
  },

  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].js",
  },

  optimization: {
    minimize: false,
  },

  // mode: 'development', // production  // can be blank and be put to npm script like 'webpack --mode production

  devServer: {
    contentBase: "./dist",
    host: "192.168.100.55",
    //  --host 192.168.100.55 // add this in the package.json for testing in mobile or external device in same network
  },

  plugins: [
    //for copying index HTML from src/playground to dist
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: playgroundDir + "index.html",
      chunks: ["index"],
      cleverFormDir: cleverFormDir,
      minify: false,
    }),

    //for copying bootstrap HTML from src/playground to dist
    new HTMLWebpackPlugin({
      filename: "bootstrap.html",
      template: playgroundDir + "bootstrap.html",
      chunks: ["bootstrap"],
      cleverFormDir: cleverFormDir,
      minify: false,
    }),

    // //for copying bootstrap JAVASCRIPT from src/playground/js to dist/js
    // new HTMLWebpackPlugin({
    //   filename: "js/bootstrap.js",
    //   template: playgroundDir + "js/bootstrap-validation.js",
    //   // minify: false,
    // }),

    //for copying simplest HTML from src/playground to dist
    new HTMLWebpackPlugin({
      filename: "simplest.html",
      template: playgroundDir + "simplest.html",
      chunks: ["simplest"],
      cleverFormDir: cleverFormDir,
      minify: false,
    }),

    //for copying Bootstrap from css to dist/css
    new HTMLWebpackPlugin({
      filename: "css/4.5.0-bootstrap.min.css",
      template: playgroundDir + "css/4.5.0-bootstrap.min.css",
    }),
  ],

  // module: {
  //     rules: [

  //         //rules for JS files
  //         {
  //             test: /\.js$/,
  //             exclude: /node_modules/,
  //             use: {
  //                 loader: 'babel-loader'
  //             }
  //         }
  //     ]
  // }
};
