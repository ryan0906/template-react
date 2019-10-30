const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const fs = require('fs');
const lessToJs = require('less-vars-to-js');
const defaultTheme = lessToJs(fs.readFileSync(path.join(__dirname, './src/styles/default.less'), 'utf8'));
 
module.exports = {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        publicPath: '/',
        contentBase: path.join(__dirname, "dist"),
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                secure: false
            }
        }
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.less']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],

            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader' // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader' // translates CSS into CommonJS
                    },
                    {
                        loader: 'less-loader', // compiles Less to CSS
                        options: {
                            modifyVars: defaultTheme,
                            javascriptEnabled: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
