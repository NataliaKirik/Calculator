const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './scripts/app.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HTMLPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new ESLintPlugin({}),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [{
            test: /\.css$/i,
            use: [
                {
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                    },
                },
            ],
        },
            {
                test: /\.ttf(\?\S*)?$/,
                use: 'url-loader',
            },
        ],
    }
}
