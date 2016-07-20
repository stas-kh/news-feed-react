module.exports = {
	entry: __dirname + "/src/js/index.jsx",
	output: {
		path: __dirname + "/build",
		filename: "ifeed.min.js"
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

