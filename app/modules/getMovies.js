var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Movie       = require('../models/movie');
var getMovies={};
 getMovies.getmovies = function(router){

  router.route('/movie').get(function(req, res) {

  Movie.find(function(err, movies) {
      if (err)
          res.send(err);
      res.json(movies);
  });
});
};
module.exports = getMovies;
