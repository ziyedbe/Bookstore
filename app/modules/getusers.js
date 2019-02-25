var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var User       = require('../models/user');
var getUsers={};
 getUsers.getUsers = function(router){

  router.route('/user').get(function(req, res) {

  User.find(function(err, users) {
      if (err)
          res.send(err);
      res.json(users);
  });
});
};
module.exports = getUsers;
