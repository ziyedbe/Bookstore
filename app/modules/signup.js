var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var User       = require('../models/user');
var md5        = require('md5');
var signup={};




signup.signup = function(router){

router.route('/user').post(function(req, res) {
  User.findOne({
  userName: req.body.userName

}, function(err, existingUser) {
  if (existingUser) {
    return res.status(409).send({
      message: 'Username is already taken!'
    });
}else {
  var user = new User();
  user.userName        = req.body.userName;
  user.password       = md5(req.body.password);
  user.Score          = 0;

  user.save(function(err) {
      if (err)
          res.send(err);
      return res.json({ message: user });

  });



}
});

      });
};
module.exports = signup;
