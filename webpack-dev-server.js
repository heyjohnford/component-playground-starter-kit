var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config.js');

var webpackPort =  3000;

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	historyApiFallback : true,
	hot: true
}).listen(webpackPort, '0.0.0.0', function (err, result) {
	if (err) { console.log(err); }
	console.log('Listening at localhost:' + webpackPort);
});
