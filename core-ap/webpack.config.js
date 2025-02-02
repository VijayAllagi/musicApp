const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies } = require('./package.json');

module.exports = {
  entry: './src/index.ts',
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'bundle.js',
  //   publicPath: "http://localhost:3001/",
  // },
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
    port: 3001,
    headers: {
        'Access-Control-Allow-Origin': '*',
      },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'coreAp',
      remotes: {
        musicLibraryApp: `musicLibraryApp@http://localhost:3000/remoteEntry.js`
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies.react,
          eager: true,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom'],
          eager: true,
        },
        'jose': {
          singleton: true,
          requiredVersion: dependencies['jose'],
          version: dependencies['jose'],
          eager: true,
        },
      },
    }),
  ],
};