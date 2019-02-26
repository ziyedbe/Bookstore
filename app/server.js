var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./models/book');
var addBook = require('./modules/addBook');
var getBooks = require('./modules/getBooks');
var FindBook   = require('./modules/FindBook');
var updateBook   = require('./modules/updateBook')
var deleteBook   = require('./modules/deleteBook');
var signup   = require('./modules/signup');
var getUsers   = require('./modules/getusers');
var guessgame   = require('./modules/guessgame');
var signin   = require('./modules/signin');
var addmovie   = require('./modules/addmovie');
var getMovies   = require('./modules/getMovies');

//
app.use(function(req, res , next){
	res.header('Access-Control-Allow-Origin' , '*');
	res.header('Access-Control-Allow-Methods' , 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers','Content-Type');
	next();
});
//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = 3000;
var router = express.Router();
addBook.saveBook(router);
getBooks.getbooks(router);
FindBook.getbook(router);
updateBook.updateBook(router);
deleteBook.deletebook(router);
signup.signup(router);
signin.signin(router);
addmovie.addMovie(router);
getMovies.getmovies(router);

guessgame.updatescore(router);

getUsers.getUsers(router);
router.get('/', function(req, res) {
res.json({ message: 'welcome to our library' });
});

app.use('/library', router);
mongoose.connect('mongodb://localhost:27017/Books', {useMongoClient: true});
console.log('connected to Books database');
app.listen(port);
console.log('server is running on port 3000' );
