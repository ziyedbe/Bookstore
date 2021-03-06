var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./models/book');
var addBook = require('./modules/addBook');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = 3000;
var router = express.Router();
addBook.saveBook(router);
router.get('/', function(req, res) {
res.json({ message: 'welcome to our library' });
});
app.use('/library', router);
mongoose.connect('mongodb://localhost:27017/Books', {useMongoClient:true});
console.log('connected to Books database');
app.listen(port);
console.log('server is running on port 3000' );
