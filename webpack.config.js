const path = require('path');
const webpack = require('webpack');

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'public/dist');

module.export = {
    entry: src + '/client/app.js',
    output: {
        path: dist,
        filename: 'bundle.js'
    },     
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        }, {
            test: /\.(scss|css)$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ] 
        }]
    },
    plugins: [ ],
    devtool: 'source-map',
    devServer: {
        contentBase: DST,
        historyApiFallback: true,
        port: 3100
    },
    mode: 'development'
}
