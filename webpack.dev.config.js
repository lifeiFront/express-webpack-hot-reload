/**
 * @Author byran <lifei@sogou-inc.com>
 * C-Time 2017/6/29.
 * hot refresh
 */

let webpack = require('webpack');
let babelSettings = {
    cacheDirectory: true,
    presets: [
        'env'
    ],
    compact: false
};
let publicPath = 'http://localhost:3000/';
let hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client?reload=true',//参数表示，遇到无法热加载的情况就刷新页面
        './src/js/test.js'//入口js文件
    ],
    output: {
        path: '/',
        publicPath: 'http://localhost:8080/scripts/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, use: [{
                loader: 'babel-loader',
                options: JSON.stringify(babelSettings)
            }]
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
                '__DEV': JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))//__DEV变量可以在入口js文件里面访问
            }
        )
    ],
    devtool: "inline-source-map"
}