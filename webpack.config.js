/**
 * Created by danqingyu on 2016/12/12.
 */
var path = require('path')
var webpack = require('webpack');
module.exports = {
    entry: {
        "index":"./src/index",//test文件1
        "index2":"./src/index2",//test文件2
    },
    output: {
        path: path.join(__dirname, 'dist'),//用来存放打包后文件的输出目录
        publicPath:'../dist/',//指定资源文件引用的目录
        filename: "[name].min.js"//生成文件名字
    },
    module: {
        //加载器配置
        loaders: [
            //.css 文件使用 style-loader 和 css-loader 来处理
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            //.js 文件使用 jsx-loader 来编译处理
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            //{ test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            //图片文件使用 url-loader 来处理，小于8M的直接转为base64
            //{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=819200'}
            { test: /\.(png|jpg)$/, loaders: [ 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]}
        ]
    },
    resolve: {
        alias: {//别名
            jquery: "./jquery.min.js"//加载jquery
        }
    },
    plugins: [//插件
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },
        }),
        new webpack.BannerPlugin('This file is created by mutouren')
    ]
}