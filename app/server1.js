var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = 3000;
var router = express.Router();
router.get('/', function(req, res) {
res.json({ message: 'welcome to our library' });
});
app.use('/library', router);
mongoose.connect('mongodb://localhost:27017/Books', {useMongoClient:true});
console.log('connected to Books database');
app.listen(port);
console.log('server is running on port 3000' );

var mongoose = require('mongoose');
var book = require('./models/book.js');
