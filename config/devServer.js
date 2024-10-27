const proxySite = 'http://192.168.31.209:8080/seeyon'

module.exports = {

    proxy: {
        '/seeyon': {
            target: proxySite,
            changeOrigin: true,
            pathRewrite: {
                '^/seeyon': ''
            }
        },
    },
    port: 8010
}
