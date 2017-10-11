const path = require('path');
const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'build');


module.exports = {
	context: srcPath,
	target: 'web',

	entry: srcPath + '/index.js',
	output: {
		path: distPath,
		filename: 'index.js'
  },

	module: {
		rules: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      		{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      		{ test: /\.css$/, loader: 'style-loader'}
		],
	}
};