'use strict';

var assert = require('assert');

var video = require('../lib/video');

describe('videos', function() {
  describe('#getRange', function() {
    it('should return the specified videos', function() {
      var videos = video.getRange(0, 2);
      assert.equal(videos.length, 3);
    });

    it('should return the all videos', function() {
      var videos = video.getRange(0, -1);
      assert.equal(videos.length, 9);
    });

    it('should extract first video through the second-to-last video', function() {
      var videos = video.getRange(0, -2);
      assert.equal(videos.length, 8);
    });

    it('should return empty array if videos do not exist', function() {
      var videos = video.getRange(101, 109);
      assert.equal(videos.length, 0);
    });
  });
});