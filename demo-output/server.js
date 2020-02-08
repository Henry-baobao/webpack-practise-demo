const express = require('express');
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config')
const compiler = webpack(config)

//tell express to use webpack-dev-middleware an webpack.config.js
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}))

//serve the files on port 3000
app.listen(3000, function () {
    console.log('Server listening on port 3000!');
})