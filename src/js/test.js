/**
 * @Author byran <lifei@sogou-inc.com>
 * C-Time 2017/6/28.
 */

/**
 * css默认可以使用热加载，修改引入的css文件页面会热更新
 * 如果你希望javascript也使用HMR，一个简单的做法是在entry文件内添加以下代码：
 */
if(module.hot) {//js热更新必须的代码
    module.hot.accept();
}


require('../css/css1.css');
require('./hot2.js');
require.ensure('./hot1.js',function (require) {//异步加载
    require('./hot1.js');
});
function test(){
    console.log('热加载');
}