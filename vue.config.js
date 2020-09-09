

module.exports = {
    publicPath: "./",
    outputDir: process.env.outputDir,
    assetsDir: 'static',
    indexPath: 'mobile.html',
    devServer: {
        open: true,
        port: 8080,
        https: false,
        // hotOnly表示当编译失败时，不刷新页面
        hotOnly: false,
        proxy: {
            '/api': {
                target: "http:www.baidu.com",         //baseUrl
                changeOrigin: true,
                pathRewrite:{
                    '^/api': '/'
                }
            }
        }
    },
    // configureWebpack: {
    //     reslove: {
    //         alias: {
    //             'views': '@/views',
    //             'components': '@/components'
    //         }
    //     }
    // }, 
    // css: {
    //     loaderOptions: {
    //         sass: {
    //             data: `

    //             `
    //         }
    //     }
    // }          
}