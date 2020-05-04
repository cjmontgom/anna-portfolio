const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

    // webpack will take the files from ./src/client/index
    entry: './src/index',

    // and output it into root folder as bundle.js
    output: {
        path: path.join(__dirname, '/'),
        filename: 'bundle.js'
    },

    // specify localhost port to listen on (this is not required, webpack-dev-server will run portfinder)
    // proxy is for when you have a separate API backend development server and we want to send API requests on the same domain.
    // In our case, we have a Node.js/Express backend where we want to send the API requests to.
    devServer: {
        port: 9000,
        open: true,
        proxy: {
            "/api": "http://localhost:8080"
        }
    },

    // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    module: {
        rules: [

            // we use babel-loader to load our jsx and tsx files
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },

            // css-loader to bundle all the css files into one file and style-loader to add all the styles inside the style tag of the document
        // *** REMOVE THIS?? ***
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff2|woff|eot|ttf|otf)$/,
                use: ['file-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};