var express = require('express');
var app = express();
var object = [["gina",-1]]
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/css'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});
app.post('/',function(sReq, sRes){
  console.log(sRes);
})
app.get('/getData',function(request, response){
  response.send(object);
})
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


