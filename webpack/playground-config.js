const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const PACKAGE = require("../package.json");
const NAME = PACKAGE.name;
const VERSION = PACKAGE.version;
const AUTHOR = PACKAGE.author;

// const cleverFormDir = `js/${NAME}-${VERSION}.min.js`; // the used cleverform in <script> tag, minified version

const cleverFormDir = `../dist/${NAME}.dev.js`; // the used cleverform in <script> tag, production minified version
// const cleverFormDir = `../dist/${NAME}.prod.min.js`; // the used cleverform in <script> tag, production minified version

let playgroundDir = "./src/playground/";

// ===================== ||     Playground webpack Config   || =====================//
module.exports = {
  name: "playground",

  entry: {
    index: [playgroundDir + "js/index.js"],
    basic: [playgroundDir + "js/basic.js"],
    bootstrap: [playgroundDir + "js/bootstrap-validation.js"],
    simplest: [playgroundDir + "js/simplest.js"],
  },

  output: {
    path: path.resolve(__dirname, "../examples"),
    filename: "js/[name].js",
    publicPath: "/examples",
  },

  optimization: {
    minimize: false,
  },

  // mode: 'development', // production  // can be blank and be put to npm script like 'webpack --mode production

  devServer: {
    // output.publicPath must be  the same with devServer.publicPath
    publicPath: "/examples",
    
    // contentBase: "./examples",
    // host: "192.168.100.55",
    //  --host 192.168.100.55 // add this in the package.json for testing in mobile or external device in same network
  },

  plugins: [
    //for copying index HTML from src/playground to examples
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: playgroundDir + "index.html",
      chunks: ["index"],
      cleverFormDir: cleverFormDir,
      minify: false,
    }),

    //basic sample
    new HTMLWebpackPlugin({
      filename: "basic.html",
      template: playgroundDir + "basic.html",
      chunks: ["basic"],
      cleverFormDir: cleverFormDir,
      minify: false,
    }),

    //for copying bootstrap HTML from src/playground to examples
    new HTMLWebpackPlugin({
      filename: "bootstrap.html",
      template: playgroundDir + "bootstrap.html",
      chunks: ["bootstrap"],
      cleverFormDir: cleverFormDir,
      minify: false,
    }),

    // //for copying bootstrap JAVASCRIPT from src/playground/js to examples/js
    // new HTMLWebpackPlugin({
    //   filename: "js/bootstrap.js",
    //   template: playgroundDir + "js/bootstrap-validation.js",
    //   // minify: false,
    // }),

    //for copying simplest HTML from src/playground to examples
    new HTMLWebpackPlugin({
      filename: "simplest.html",
      template: playgroundDir + "simplest.html",
      chunks: ["simplest"],
      cleverFormDir: cleverFormDir,
      minify: false,
    }),

    //for copying Bootstrap from css to examples/css
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
