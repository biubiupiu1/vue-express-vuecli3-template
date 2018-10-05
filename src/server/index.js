const express = require('express');
const webpack = require('webpack');
const path = require('path');

const app = express();

if (app.get('env') === 'development') {

    const config = require('@vue/cli-service/webpack.config');
    const compiler = webpack(config);

    // Tell express to use the webpack-dev-middleware and use the webpack.config.js
    // configuration file as a base.

    app.use(require('webpack-dev-middleware')(compiler, {
        publicPath: config.output.publicPath
    }));

    app.use(require("webpack-hot-middleware")(compiler));

}

app.use('/static', express.static(path.join(__dirname, '../../dist/static')))

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
});


// Serve the files on port 3000.
app.listen(3000, () => {
    console.log('Example app listening on port 3000! \n');
});