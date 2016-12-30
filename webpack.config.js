var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		server: './src-server/server01.js',
		client: './src-client/client01.js',
	},

	output: {
		path: path.join(__dirname, 'public'),
		filename: '[name].bundle.js',
	},

	module: {
  		loaders: [
    		{
      			test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			}
		],
	},

	devServer: {
		contentBase: path.join(__dirname, "public"),
		compress: true,
		port: 9000,
	},

}