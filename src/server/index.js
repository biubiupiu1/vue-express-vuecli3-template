import express from 'express'
import webpack from 'webpack'
import path from 'path'
import bodyParser from "body-parser"

const app = express();

if (app.get('env') === 'development') {

    const config = require('@vue/cli-service/webpack.config');
    const compiler = webpack(config);

    // Tell express to use the webpack-dev-middleware and use the webpack.config.js
    // configuration file as a base.

    app.use(require('webpack-dev-middleware')(compiler, {
        publicPath: config.output.publicPath,
        stats: "errors-only"
    }));

    app.use(require("webpack-hot-middleware")(compiler));

}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/static', express.static(path.join(__dirname, '../../dist/static')))

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
});


// Serve the files on port 3000.
app.listen(3000, () => {
    console.log('Example app listening on port 3000! \n');
});
