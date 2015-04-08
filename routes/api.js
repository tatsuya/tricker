'use strict';

var express = require('express');
var router = express.Router();

var tree = require('../data/tree');
var tricks = require('../data/tricks');
var videos = require('../lib/videos');

router.get('/tricks', function(req, res) {
  res.send(tree);
});

router.get('/tricks/:trick', function(req, res) {
  var trick = req.params.trick;
  res.send(tricks[trick]);
});

router.get('/videos', function(req, res) {
  res.send(videos.list());
});

router.get('/videos/:trick', function(req, res) {
  var trick = req.params.trick;
  res.send(videos.filterByTag(trick));
});

module.exports = router;