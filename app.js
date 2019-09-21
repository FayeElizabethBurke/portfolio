
var express = require('express'),
    bodyParser = require("body-parser"),
    app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get("/details", (req, res) => {
  res.render('details');
});

app.listen(3000, () => {
  console.log('server listening on port 3000');
});

module.exports = app;