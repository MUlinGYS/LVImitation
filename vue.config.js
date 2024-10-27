const path = require('path')
const devServer = require("./config/devServer.js"); // 代理配置
const resolve = dir => {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: './',
    devServer: devServer,
    lintOnSave: false,
    chainWebpack: config => {
        config.resolve.alias
            // .set('_c', resolve('src/components')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('@', resolve('src/'))
    },


}