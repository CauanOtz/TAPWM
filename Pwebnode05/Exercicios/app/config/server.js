var express = require('express')
var texto = require('/modulo1.js')

var app = express()

app.set('view engine','ejs');
app.set('views','./app/views');

module.exports = app;