const path = require('path');

module.exports = {
    baseUrl: './',
    assetsDir: 'static',
    chainWebpack: config => {
        let temp = config
                    .entry('app')
                    .clear()
                    .add(path.join(__dirname, './src/client/main.js'));
        if (process.env.NODE_ENV === 'development') {
            temp.add("webpack-hot-middleware/client")
        }
    }
};