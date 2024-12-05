const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/react-app/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'out'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/react-app/index.html',
            filename: 'index.html',
        }),
    ],
    mode: 'production',
};
