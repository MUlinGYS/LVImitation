const proxySite = 'https://test.eonet.cc/index'

module.exports = {

    proxy: {
        '/index': {
            target: proxySite,
            changeOrigin: true,
            pathRewrite: {
                '^/index': ''
            }
        },
    },
    port: 8010
}
