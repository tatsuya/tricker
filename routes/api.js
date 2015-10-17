'use strict';

var express = require('express');
var router = express.Router();

var page = require('../lib/middlewares/page');
var PERPAGE = 5;

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

router.get('/videos', page(video.count, PERPAGE), function(req, res) {
  var page = req.page;

  var videos = video.getRange(page.from, page.to);

  var links = {};
  var path = '/videos?';
  if (typeof page.number === 'number') {
    if (page.number) {
      links.prev = path + 'page=' + page.number;
    }
    if (page.number < page.count - 1) {
      links.next = path + 'page=' + (page.number + 2);
    }
  }
  res.links(links);
  res.send(videos);
});

router.get('/videos/:trick', page(video.count, PERPAGE), function(req, res) {
  var page = req.page;
  var trick = req.params.trick;

  var videos = video.getRange(page.from, page.to, trick);

  var links = {};
  var path = '/videos?';

  console.log(page);

  if (typeof page.number === 'number') {
    if (page.number) {
      links.prev = path + 'page=' + page.number;
    }
    if (page.number < page.count - 1) {
      links.next = path + 'page=' + (page.number + 2);
    }
  }

  res.links(links);
  res.send(videos);
});

module.exports = router;