const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SRC = path.resolve(__dirname, 'src');
const DST = path.resolve(__dirname, 'public');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseHref = '/';
module.exports = {
    entry: SRC + '/client/app.js',
    output: {
        path: DST + '/dist',
        filename: 'bundle.js'
    },     
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: '/node_modules/',
            query: {compact: false} 
        }, {
            test: /\.(scss|css)$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin(),
        new BaseHrefWebpackPlugin({baseHref: baseHref})
    ],
    mode: 'production',    
    devtool: 'source-map',
    devServer: {
        contentBase: DST,
        historyApiFallback: true,
        compress: true,
        port: 3100
    }
}
