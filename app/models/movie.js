var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var movieSchema   = new Schema({
    title: String,
    Synopsis : String,

});
module.exports = mongoose.model('movie', movieSchema);
