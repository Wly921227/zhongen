var ExtractTextPlugin = require('extract-text-webpack-plugin')

var loaders = [
    // JS
    {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
            plugins: [
                'transform-decorators-legacy',
                'react-hot-loader/babel'
            ],   /// 使用decorator写法
            presets: [
                'es2015',
                'stage-2',
                'react'
            ]
        }
    },
    // images
    {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192'   // 单位b
    },
    // font
    {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
    }
]

if (process.env.NODE_ENV !== 'production') {
    loaders = loaders.concat([
        // less
        {
            test: /\.less?$/,
            exclude: /(node_modules)/,
            loader: 'style!css!less!autoprefixer?browsers=last 2 version&remove=false'
        },
        // css
        {
            test: /\.css?$/,
            exclude: /(node_modules)/,
            loader: 'style!css!autoprefixer?browsers=last 2 version&remove=false'
        }])
} else {
    loaders = loaders.concat([
        // less
        {
            test: /\.less?$/,
            exclude: /(node_modules)/,
            loader: ExtractTextPlugin.extract('style', 'css!less!autoprefixer?browsers=last 2 version&remove=false')
        },
        // css
        {
            test: /\.css?$/,
            exclude: /(node_modules)/,
            loader: ExtractTextPlugin.extract('style', 'css!autoprefixer?browsers=last 2 version&remove=false')
        }])
}

module.exports = loaders