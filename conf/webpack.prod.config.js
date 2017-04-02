/**
 * Created by wangluyuan on 16/10/9.
 */

var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var webpackBase = require('./webpack.base.config')
var port = 8081

var config = Object.assign(webpackBase, {
    devtool: false  // 控制台代码映射
})

Object.getOwnPropertyNames((webpackBase.entry || {})).map(function (name) {
    config.entry[name] = []
    //添加HMR文件
        .concat(webpackBase.entry[name])
})

// 输出目录
config.output = {
    path: path.resolve(__dirname, '../dist/'),
    publicPath: '/',
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[id].[hash].js'
}

// 插件
config.plugins = (webpackBase.plugins || []).concat(
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    // generate dist index.html with correct asset hash for caching.
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
        title: '忠恩饲用天然植物有限公司',
        filename: 'index.html',
        template: path.resolve(__dirname, './template/index.prod.html'),
        favicon: path.resolve(__dirname, '../src/images/favicon.png'),
        inject: true,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
            // more options:
            // https://github.com/kangax/html-minifier#options-quick-reference
        },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency'
    }),
    new ExtractTextPlugin('css/[name].[hash].css'),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
    })
)

module.exports = {
    config,
    port
}