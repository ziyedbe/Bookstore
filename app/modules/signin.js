var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var User       = require('../models/user');
var md5        = require('md5');
var signin={};


signin.signin = function(router){

router.post('/login',function(req,res){
  var userName=req.body.userName;
  var password=md5(req.body.password);
  User.findOne({userName: userName ,password: password}, function(err,user){
    if(err){
      console.log(err);
      return res.status(500).send({message: 'Wrong username and/or password'
});
    }
    if(!user){
      return res.status(401).send({
          message: 'Wrong username and/or password'
});
    }
    return res.status(200).send({
        message: user
});
  })
})
};
module.exports = signin;
