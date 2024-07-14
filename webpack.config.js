const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: './src/index.js',
        todo: './src/todo.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {

    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Todo List',
            myPageHeader: 'Hello World',
            template: './src/index.html',
            filename: 'index.html' //relative to root of the application
        }),
    ],
};