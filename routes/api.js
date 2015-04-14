'use strict';

var express = require('express');
var router = express.Router();

var page = require('../lib/middleware/page');

var tree = require('../data/tree');
var tricks = require('../data/tricks');
var video = require('../lib/video');

router.get('/tricks', function(req, res) {
  res.send(tree);
});

router.get('/tricks/:trick', function(req, res) {
  var trick = req.params.trick;
  res.send(tricks[trick]);
});

router.get('/videos', function(req, res) {
  res.send(video.list());
});

router.get('/videos/:trick', function(req, res) {
  var trick = req.params.trick;
  res.send(video.filterByTag(trick));
});

module.exports = router;