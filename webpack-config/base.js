const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: process.cwd() + '/src/main.js',
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: process.cwd() + '/src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: 'babel-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    hash: 'sha512',
                    publicPath: '/',
                    name: 'assets/images/[hash].[ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            src: path.resolve(__dirname, './../src')
        }
    }
};
