var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/folio');
var folio = require('./routes/folio');
var port = 3600;

var app = express();

//Setting up view engine//

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set Static Folder

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'client/src')));
// Body Parser MW

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', folio);

app.listen(port, function(){
  console.log('server started on port ' +port);
});
