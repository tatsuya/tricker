'use strict';

var express = require('express');
var router = express.Router();

var videos = {
  'shifty': [
    {
      'player': 'youtube',
      'video_id': '3ADpEvn0mT4',
      'title': 'キッカーを使ってFsシフティ IKENOCITY PARK ACADEMY　スノーボードHow to'
    },
    {
      'player': 'youtube',
      'video_id': 'JfCWJOt0CzM',
      'title': '【キッカー・シフティ】グラブするより難しい、グラブするよりかっこいい！　初心者が参考にするスノーボード動画レッスン講座'
    },
    {
      'player': 'youtube',
      'video_id': 'KQ-XQdGMrHc',
      'title': 'キッカーを使ってBsシフティ IKENOCITY PARK ACADEMY　スノーボードHow to'
    },
    {
      'player': 'youtube',
      'video_id': 'RVoP-UFewdQ',
      'title': 'How to Shifty Backside - Snowboarding Tricks'
    }
  ],
  'backside-triple-cork-1440': [
    {
      'player': 'vimeo',
      'video_id': '20737088',
      'title': 'Mark McMorris Backside Triple Cork 1440 - TransWorld SNOWboarding'
    }
  ]
};

router.get('/videos/:trick', function(req, res) {
  var trick = req.params.trick;
  res.send(videos[trick]);
});

module.exports = router;