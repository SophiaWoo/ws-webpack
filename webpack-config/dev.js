const base = require('./base.js');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(base, {
    output: {
        filename: '[name].bundle.js'
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'css-loader'
            },
            {
                test: /\.less/,
                exclude: [/node_modules/],
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
        ]
    }
});
