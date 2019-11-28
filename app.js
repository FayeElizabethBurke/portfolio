
var express = require('express'),
    bodyParser = require("body-parser"),
    app = express(),
    compression = require('compression');


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get("/details", (req, res) => {
  res.render('details');
});
var port = process.env.PORT || 3000;
app.listen(port);

module.exports = app;