/**
 * @Author byran <lifei@sogou-inc.com>
 * C-Time 2017/6/29.
 * 安装完成依赖，执行node main.js
 * 在页面中访问http://localhost:8080/index.html
 * 修改对应的js或者css文件可以看到热更新情况。
 */
var express = require('express')
var webpack = require('webpack')
var WebpackDevMiddleware = require('webpack-dev-middleware')
var WebpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.dev.config')
var compiler = webpack(config)
app = express()
app.use(express.static('public'));//express静态资源管理
app.use(WebpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: { colors: true }
}))
app.use(WebpackHotMiddleware(compiler))
// var router = express.Router()
// router.get('/', function (req, res, next) {
//     res.render('index', { message: 'Hey there!'});
// })
// app.use(router)
app.listen(8080, function () {
    console.log('Listening on 8080')
})
