const base = require('./base.js');
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = webpackMerge(base, {
    entry: './src/main.js',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval-source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {test: /\.html$/, loader: 'html-loader', options: {minimize: true}},
            {test: /\.css$/, use: 'css-loader'},
            {test: /\.js$/, exclude: [/node_modules/], use: 'babel-loader'},
            {test: /\.less/, exclude: [/node_modules/], loaders: ['style-loader','css-loader','less-loader']},
            {test: /\.(jpe?g|png|gif|svg)$/i,
              loader: 'url-loader',
              options: {
                limit: 10000,
                hash: 'sha512',
                publicPath: '/',
                name: 'assets/images/[hash].[ext]'
              }
            }
        ]
    }
});

