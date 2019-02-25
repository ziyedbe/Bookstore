var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var userSchema   = new Schema({
    userName: String,
    password : String,
    Score : Number
});
module.exports = mongoose.model('user', userSchema);
