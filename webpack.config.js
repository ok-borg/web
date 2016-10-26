require('dotenv').config({
    silent: false,
    path: '.env'
});

'use strict';

const
    path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    WebpackNotifierPlugin = require('webpack-notifier'),
    FaviconsWebpackPlugin = require('favicons-webpack-plugin');


module.exports = {
    devtool: 'eval-source-map',
    devServer: {inline: true},
    entry: {
        a: 'webpack-dev-server/client?http://localhost:' + process.env.PORT + '/',
        b: path.join(__dirname, 'src', 'main.tsx')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new FaviconsWebpackPlugin({
            prefix: 'public/images/favicons/icons-[hash]/',
            logo: './public/images/borg_mascot.png',
            persistentCache: true
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: 'src/index.ejs',
            filename: 'index.html',
            title: 'OK borg - the quickest solution to your bash woes',
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
        new webpack.NoErrorsPlugin(),
        new WebpackNotifierPlugin(),
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