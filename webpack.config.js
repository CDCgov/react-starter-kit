const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');

// Development Configuration
module.exports = (env, { mode }) => ({
	mode,

    // each entry point will resolve to a separate output
    // JS file or set of JS files - here we have just 1
    entry: {
		app: './src/index.js',
	},

    devtool: mode === 'development' ? 'inline-source-map' : false,

    // this helps track when your dist JS goes over a certain size
    performance: {
		hints: mode === 'development' ? false : 'warning',
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},

    // webpack can "chunk" your output JS if it's large and has
    // various conditional areas of JS logic
	// optimization: {
	// 	splitChunks: {
	// 		chunks: 'all',
	// 	},
	// },

    // this sets up the demo page available for local development
    // you can define multiple demo pages here
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
	stats: 'minimal',

    // ignore the node_modules folder while running dev host
	watchOptions: {
		ignored: /node_modules/
	},

    // configures your output js files
    output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js',
	},

    // sets up your local dev instance, which loads in localhost:8080
	devServer: {
		open: true,

        // if we defined multiple demo pages under plugins, you
        // can define which ones are loaded on `npm start` here
		// open: [
		// 	'/page1.html',
		// 	'/page2.html',
		// ],

		client: {
			overlay: {
				warnings: false,
				errors: true,
			},
		},

        // in Dev mode you can serve up assets beyond your React app by specifying local paths
		// to serve additional static content from. The pathes added to static will serve from
		// //localhost:8080/
		// static: [ path.join( __dirname, './src' ) ]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.(png|jp(e*)g|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: 'images/[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						// Babel will attempt to
						presets: [
							[
								'@babel/preset-env',
								{
									corejs: { version: 3 },
									useBuiltIns: 'entry',
								},
							],
							'@babel/preset-react',
						],
						plugins: ['@babel/plugin-proposal-class-properties'],
					},
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
			{
				test: /\.svg$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							generator: (content) => svgToMiniDataURI(content.toString()),
						},
					},
				],
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
});
