/**
 * Created by wangluyuan on 16/10/9.
 */

// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'production'

var ora = require('ora')
var path = require('path')
var webpack = require('webpack')
var express = require('express')

var devConfig = require('../conf/webpack.prod.config')

var app = express()
app.use(express.static(path.join(__dirname, '../dist')))

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(__dirname, '../dist')
rm('-rf', assetsPath)
mkdir('-p', assetsPath)

webpack(devConfig.config, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n')

    app.listen(devConfig.port, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('Listening at http://localhost:' + devConfig.port);
    })
})
