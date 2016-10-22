'use strict';

const
    path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    StatsPlugin = require('stats-webpack-plugin');

module.exports = {
    entry: [
        path.join(__dirname, 'app', 'main.tsx')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]-[hash].min.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new HtmlWebpackPlugin({
            inject: false,
            template: 'app/index.prod.ejs',
            filename: 'index.html',
            title: 'React Node Webpack Typescript',
            files: {
                js: ["assets/head_bundle.js", "assets/main_bundle.js"],
                chunks: {
                    head: {
                        entry: "assets/head_bundle.js"
                    },
                    main: {
                        entry: "assets/main_bundle.js"
                    }
                }
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        }),
        new StatsPlugin('webpack.stats.json', {
            source: false,
            modules: false
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
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