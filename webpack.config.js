'use strict';

const
    path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        a: 'webpack-hot-middleware/client?reload=true',
        b: path.join(__dirname, 'app', 'main.tsx')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: 'app/index.ejs',
            filename: 'index.html',
            title: 'React Node Webpack Typescript',
            files: {
                js: ['assets/head_bundle.js', 'assets/main_bundle.js'],
                chunks: {
                    head: {
                        entry: 'assets/head_bundle.js'
                    },
                    main: {
                        entry: 'assets/main_bundle.js'
                    }
                }
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new WebpackNotifierPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            {test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/}
        ]
    }
};