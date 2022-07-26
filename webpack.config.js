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
	// chunks tie to your entry values above
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			chunks: ['app'],
		}),
	],
	stats: 'minimal',

	// ignore the node_modules folder while running dev host
	watchOptions: {
		ignored: /node_modules/,
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

		// Have other assets you want local during the local dev preview?
		// In Dev mode you can serve up assets beyond your React app by specifying local paths
		// to serve additional static content from. The pathes added to static will serve from
		// //localhost:8080/
		// static: [
		//    path.join( __dirname, '../another/folder' ),
		//    path.join( __dirname, '../../yet/another/folder' ),
		// ]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
			// IMAGES
			// This is set up convert images to base64 embeds.
			// For large, complex images, this may get bulky, and
			// you may not want to do this, so follow the pattern below
			// for woff/woff2/csv files.
			{
				test: /\.(png|jp(e*)g|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: '[name].[ext]',
						},
					},
				],
			},

			// SVGS
			// This loader converts full SVGs into in page SVG tags.
			// Again, if you have SVG files you want to load as separate
			// file assets without embedding into your JS, just use the standard
			// loader for woff/woff2/csv files below.
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

			// MISCELLANEOUS FILES
			// This is a catch all loader for miscellaneous. Can be used
			// for images as well, so they're separate assets, served separately.
			// Files are used as is. They'll get copied straight into the dist folder.
			{
				test: /\.(woff2?|csv|xslx|txt)$/i,
				type: 'asset/resource',
			},

			// JS
			// Convert our JSX and backend JS to friendly cross-browser JS.
			{
				test: /\.js$/,
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

			// TYPESCRIPT
			// This will transform TypeScript files into JS just as the above
			// ruleset handles JS files.
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},

			// SCSS
			// This is specific for Sass files. There's a loader for Less files,
			// and below we have a loader for straight CSS files.
			// NOTE: when you build, the CSS is embeded into JS.
			//       This'll seem odd, but it's quick.
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

			// CSS
			// Straight CSS files get the same loaders, minus the sass loader.
			{
				test: /\.css$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
				],
			},
		],
	},
});
