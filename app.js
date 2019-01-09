var express = require('express');
var app = express();
var {join} = require('path');
var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use("/public", express.static(join(join(__dirname,'views'), 'public')));
app.get('/api', function (req, res) {
  res.send('Hello World')
});

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.listen(8180);
