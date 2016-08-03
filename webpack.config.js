module.exports = {
	entry: __dirname + "/src/js/index.jsx",
	output: {
		path: __dirname + "/dist",
		filename: "ifeed.js"
	},
	devtool: 'source-map',
	module: {
		loaders: [{
			test: /\.js/,
			loader: "babel-loader",
			exclude: /node_modules/
		}]
	},
	resolve: {
		extensions: ["", ".js", ".jsx"]
	}
};