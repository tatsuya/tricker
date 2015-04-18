'use strict';

var express = require('express');
var router = express.Router();

var page = require('../lib/middlewares/page');

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

router.get('/videos', page(video.count, 5), function(req, res) {
  var page = req.page;
  var videos = video.getRange(page.from, page.to);

  var links = {};
  if (page.number) {
    links.prev = '/videos?page=' + page.number;
  }
  if (page.number < page.count - 1) {
    links.next = '/videos?page=' + (page.number + 2);
  }
  res.links(links);

  res.send(videos);
});

router.get('/videos/:trick', function(req, res) {
  var trick = req.params.trick;
  res.send(video.filterByTag(trick));
});

module.exports = router;