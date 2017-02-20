/**
 * Created by danqingyu on 2017/2/20.
 */
require('./style.css');//加载css
require('./demo.png');//加载图片
require('expose-loader?$!jquery');//加载依赖jquery
require('./index_child');//加载js
//console.log(require('./demo.png'))//打印图片
