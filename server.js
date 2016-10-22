require('dotenv').config({silent: true});

const
    path = require('path'),
    fs = require('fs'),
    http = require('http'),
    express = require('express'),
    morgan = require('morgan'),
    webpack = require('webpack'),
    favicon = require('serve-favicon'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    historyApiFallback = require('connect-history-api-fallback'),
    config = require('./webpack.config.js');

const
    isDeveloping = process.env.NODE_ENV === 'development',
    port = process.env.PORT || 8080;

const app = express();

app.use(morgan(isDeveloping ? 'dev' : 'combined'));
app.use(favicon(path.join(__dirname, 'public', 'images', 'social', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

if (isDeveloping) {
    const compiler = webpack(config);
    const middleware = webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        contentBase: path.join(__dirname, 'app'),
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });

    app.use(historyApiFallback({verbose: false}));
    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));

    app.get('*', function response(req, res) {
        res.write(middleware.fileSystem.readFileSync(path.join(config.output.path, 'index.html')));
        res.end();
    });
} else {
    app.use(express.static(path.join(__dirname, 'dist')));

    app.get('*', function response(req, res) {
        res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
}

const httpServer = http.createServer(app);

httpServer.listen(port, function onStart(err) {
    if (err)
        console.log(err);

    console.info('Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});