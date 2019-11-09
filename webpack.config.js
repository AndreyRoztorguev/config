const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrettierPlugin = require("prettier-webpack-plugin");

 
module.exports = {
	entry: ['./src/index.js'],
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'index_bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			}
		]
	},
	plugins: [
		// Плагин и настройка html-webpack-plugin
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		/// Плагин и настройка Prettier
		new PrettierPlugin({
			printWidth: 80,
			tabWidth: 2,
			useTabs: true,
			semi: true,
			encoding: 'utf-8',
			extensions: [".js", ".ts"]
		})
	]

};
