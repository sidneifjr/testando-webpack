const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',

    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'build'),
    },

    devServer: {
        contentBase: './build',
    },

    devServer: {
        port: 9000,
    },
});
