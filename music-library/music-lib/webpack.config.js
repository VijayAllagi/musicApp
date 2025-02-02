const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const { dependencies } = require('./package.json');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: "http://localhost:3000/",
  },
  mode: "development",
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    headers: {
        'Access-Control-Allow-Origin': '*',
      },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "musicLibraryApp",
      filename: "remoteEntry.js",
      exposes: {
        './MusicLibrary': './src/MusicLibrary.tsx',
      },
      shared: {
        ...dependencies,
        react : {
          eager: true
        },
        "react-dom" : {
          eager: true
        }
      },
    }),

  ],
};