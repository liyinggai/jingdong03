/*
 * @Author: your name
 * @Date: 2021-04-09 20:06:53
 * @LastEditTime: 2021-04-09 20:36:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jingdong03\vue.config.js
 */
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: config => {
        config.module.rule('pug')
            .test(/\.pug$/)
            .use('pug-html-loader')
            .loader('pug-html-loader')
            .end()
    },
    chainWebpack: config => {
        //路径配置
        config.resolve.alias
            .set('assets', resolve('src/assets'))
            .set('styles', resolve('src/assets/styles'))
    },

    // webpack-dev-server 相关配置  
    devServer: {
        // 调试端口
        // port: 8989
    }
    //其他配置....
}

// module.exports = {
//     chainWebpack: config => {
//         config.module.rule('pug')
//             .test(/\.pug$/)
//             .use('pug-html-loader')
//             .loader('pug-html-loader')
//             .end()
//     }
// }


