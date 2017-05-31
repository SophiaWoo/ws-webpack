const base = require('./base.js');
const webpackMerge = require('webpack-merge');

const webpack = require('webpack');
const extractTextWebpackPlugin = require("extract-text-webpack-plugin");
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = webpackMerge(base, {
    output: {
        filename: 'bundle.[chunkhash].js',
        path: process.cwd() + '/dist'
    },
    plugins: [
        new cleanWebpackPlugin(['dist'], {
            root: process.cwd(),
            exclude: []
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        new extractTextWebpackPlugin({
            filename: "bundle.[chunkhash].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.less$/,
                exclude: [/node_modules/],
                use: extractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'less-loader'
                    ]
                })
            }
        ]
    }
});
