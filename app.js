var express = require('express');
var app = express();
var {join} = require('path');
var exphbs  = require('express-handlebars');
var util = require('./src/utils');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use("/public", express.static(join(join(__dirname,'views'), 'public')));
app.get('/api', function (req, res) {
  res.send('Hello World')
});
var hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        eachInMap: function ( map, block ) {
            var out = '';
            Object.keys( map ).map(function( prop ) {
               out += block.fn( {key: prop, value: map[ prop ]} );
            });
            return out;
        }
    }
});


app.get('/', function (req, res) {
    util.getPostsUtil().then(function(data){
        res.render('home',{
            data:data
        });
    })
 
});

//get posts
app.get('/posts',function(req,res){
    util.getPosts(req,res);
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.listen(8180);
