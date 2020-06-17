import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console*/
let port = 8000;
const app = express();
const compiler = webpack(config);

// webpack config
app.use(require('webpack-dev-middleware')(compiler,{
    noInfo: true,
    publicPath: config.output.publicPath
}));

// express
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../src/index.html'));
});
// add users route
app.get('/users',function(req,res){
    res.json([
            { "id": 1,"Name": "Zachy","Gender": "Male", "Email": "moseti001@gmail.com"},
            { "id": 2,"Name": "Finna","Gender": "Female", "Email": "finna@gmail.com"},
            { "id": 3,"Name": "Rodgers","Gender": "Male", "Email": "roger@gmail.com"}
    ])
})
app.listen(port,function(err){
    if (err) {
        console.log(err);
    }
    else {
        open('http://localhost:' + port);
    }
});