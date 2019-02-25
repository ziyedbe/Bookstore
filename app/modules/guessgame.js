var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var User       = require('../models/user');
var updatescore={};
 updatescore.updatescore = function(router){
 router.route('/user/:id').put(function(req, res) {

   User.findOneAndUpdate({ _id: req.params.id }, { $inc: { Score: req.body.Score} },function(err, response) {
if (err) {
//callback(err);
} else {
//callback(response);
}
});

    });
};
module.exports = updatescore;
