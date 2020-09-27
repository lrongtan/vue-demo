const path = require('path')

function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: "./",
    outputDir: process.env.outputDir,
    assetsDir: 'static',
    indexPath: 'mobile.html',
    devServer: {
        open: true,
        port: 8081,
        https: false,
        // hotOnly表示当编译失败时，不刷新页面
        hotOnly: false,
        proxy: {
            '/api': {
                target: process.env.APP_HOST,         //baseUrl
                changeOrigin: true,
                pathRewrite:{
                    '^/api': '/'
                }
            }
        }
    },
    chainWebpack: (config)=>{
        //设置文件目录别名
        config.resolve.alias
        .set('@styles',resolve('src/assets/styles'))
        .set('@views',resolve('src/views'))
        .set('@components',resolve('src/components'))
        .set('@utils',resolve('src/utils'))
    },
    css: {
        // 预处理
        loaderOptions: {
            sass:{
                prependData: `
                @import "@styles/scss/variables.scss";
                @import "@styles/scss/mixin.scss";
                `
            },
            less:{
                lessOptions:{
                    modifyVars:{
                        'button-primary-background-color': '#000',      //针对 个别less 变量覆盖
                        hack: `true; @import "@styles/less/vant";`      //直接覆盖less文件 https://github.com/youzan/vant/blob/dev/src/style/var.less
                    }
                }
            }
        }
    }
}