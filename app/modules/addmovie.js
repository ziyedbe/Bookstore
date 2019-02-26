var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Movie       = require('../models/movie');

var addMovie={};
addMovie.addMovie = function(router){
router.route('/movie').post(function(req, res) {
          var movie = new Movie();
          movie.title          = req.body.title;
          movie.Synopsis       = req.body.Synopsis;

          movie.save(function(err) {
              if (err)
                  res.send(err);
              res.json({ message: 'the new movie was succefully added to the database' });
          });
      });
};
module.exports = addMovie;
