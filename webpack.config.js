'use strict';

var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const source = path.resolve(__dirname + '/source');
const output = path.resolve(__dirname + '/build');

// const extractSass = new ExtractTextPlugin({
// 	filename: "[name].[contenthash].css",
// 	disable: process.env.NODE_ENV === "development"
// });

module.exports = {
	entry: `${source}/index.js`,
	output: {
		path: output,
		filename: 'js/bundle.js'
	},
	devtool: 'source-map',
	devServer: {
		contentBase: output,
		compress: true
	},
	module: {
		rules: [{
			test: /\.(js|jsx)?$/,
			exclude: /node_modules/,
			use: 'babel-loader'
		},
		{
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader?url=false', 'sass-loader']
			})
		}]
	},
	plugins: [
		new ExtractTextPlugin({ filename: '/css/build.css', allChunks: true })
	]
}
