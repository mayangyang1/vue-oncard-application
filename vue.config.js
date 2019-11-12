const autoprefixer = require('autoprefixer');
const pxtoviewport = require('postcss-px-to-viewport');

const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtoviewport({
                        viewportWidth: 375,
                        // 该项仅在使用 Circle 组件时需要
                        // 原因参见 https://github.com/youzan/vant/issues/1948
                        selectorBlackList: ['van-circle__layer']
                    })
                ]
            }
        }
    },
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'https://one.boom56.com/api',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api' : ''
                }
            }
        }
    },
    configureWebpack: {
        // name: name,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
}