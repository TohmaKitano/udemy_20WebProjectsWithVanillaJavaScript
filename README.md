# 20 Web Projects With Vanilla JavaScript
Build 20 mini frontend projects from scratch with HTML5, CSS & JavaScript (No frameworks or libraries)

## Index
1. Form Validator | Intro Project
1. Movie Seat Booking | DOM & Local Storage
1. Custom Video Player | HTML5 Video API
1. Exchange Rate Caluculator | Fetch & JSON
1. DOM Array Methods | forEach, map, filter, sort, reduce
1. Menu Slider & Modal | DOM & CSS
1. Hangman Game | DOM, SVG, Events
1. Meal Finder | Fetch & MealDB API
1. Expence Tracker | Array Methods & Local Storage
1. Music Player | HTML5 Audio API
1. Infinite Scroll Posts | Fetch, Async/Await, PostCSS Loader
1. Typing Game | DOM, Intervals, Events
1. Speech Text Reader | Speech Synthesis

## Good VSCode Expanded Functionality
1. Emmet
1. Auto Rename Tag
1. Bracket Pair Colorizer
1. JavaScript (ES6) code snippets
1. Live Server
1. Prettier - Code formatter

## Good JavaScript Materials
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

## Good CSS Materials
- [Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)

## Good Javascript Document
- [Video and Audio APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)

## Project Base Setting by webpack
webpackを使用する必然性はないがシステムに慣れるために導入する

### Pending
assets以下のディレクトリがビルド時にクリーンナップされてしまうため、以下設定の変更をした。

#### webpack.config.js

```javascript
// ...
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 

// ...
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/style.css",
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!**.html", "!assets/**"], //削除対象外を指定
    }),
  ],
```

#### package.json

```javascript
{
  "version": "1.0.0",
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack --mode development",
    "start:dev": "npx webpack serve --mode development",
    "watch": "webpack --watch"
  },
  "private": true,
  "devDependencies": {
    "@babel/core": "^7.17.2",
    "@babel/polyfill": "^7.12.1",
    "@babel/preset-env": "^7.16.11",
    "babel-loader": "^8.2.3",
    "css-loader": "^6.6.0",
    "css-minimizer-webpack-plugin": "^3.4.1",
    "mini-css-extract-plugin": "^2.5.3",
    "postcss": "^8.4.6",
    "postcss-loader": "^6.2.1",
    "postcss-preset-env": "^7.4.1",
    "sass": "^1.49.8",
    "sass-loader": "^12.6.0",
    "style-loader": "^3.3.1",
    "webpack": "^5.68.0",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.7.4"
  },
  "dependencies": {
    "jquery": "^3.6.0"
  }
}
```

#### webpack.config.js

```javascript
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  devtool: "source-map",
  mode: "development",
  // mode: "production",

  entry: {
    main: "./src/assets/js/index.js",
  },

  // watch: true,
  watchOptions: {
    ignored: ["node_modules/**"]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/style.css",
    }),
  ],

  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin({
        parallel: true,
      }),
    ],
  },

  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {    
            loader: "css-loader",
            options: {
               importLoaders: 2, 
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // options
                      stage: 0,
                      browsers: "last 2 versions",
                      autoprefixer: { grid: true }
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sassOptions: {  
                outputStyle: "compressed",
              },
            }
          }
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext][query]"
        }
      },
    ],
  },
  target: ["web", "es5"],

  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/img/[name][ext][query]",
    filename: "assets/js/[name].js",
    clean: {
      keep: /index.html/,
    } 
  },

  optimization: {
    splitChunks: {
      name: 'vendor',
      // initial or all
      chunks: 'initial',
    }
  },

  devServer: {
    static: "dist",
    open: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  
};
```
