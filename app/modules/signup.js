var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var User       = require('../models/user');
var md5        = require('md5');
var signup={};



function createToken(user) {
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
}
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
      res.json({ message: 'Sign up sucessful' });

  });



}
});

      });
};
module.exports = signup;
