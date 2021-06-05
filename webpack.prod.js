const path = require('path');
const wepack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/client/index.js",
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins:  [
        new HtmlWebpackPlugin({
            template: './src/client/views/index.html',
            file: './index.html'
        })
    ] 
}