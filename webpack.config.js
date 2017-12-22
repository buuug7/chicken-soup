/*
* webpack config file
* */

const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './themes/bs4/assets/scripts/src/app.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'themes/bs4/assets/scripts'),
    },
    devtool: 'inline-source-map',
    plugins: [
        new ExtractTextWebpackPlugin({
            filename: (getPath) => {
                return getPath('../styles/css/[name].bundle.css');
            },
            allChunks: true,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                    },
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextWebpackPlugin.extract({
                    'fallback': 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
        ]
    }
};