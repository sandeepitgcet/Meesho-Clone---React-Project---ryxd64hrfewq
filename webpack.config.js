const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
module.exports = {
    entry: './src/index.js',

    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js",
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ]
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true,
        //liveReload: false,
     },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new Dotenv({
			path: `./.env`
		}),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};
