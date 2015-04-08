var videos = require('../data/videos_2');

exports.list = function() {
  return videos;
};

exports.filterByTag = function(tag) {
  return videos.filter(function(video) {
    var tags = video.tags;
    return tags.indexOf(tag) >= 0;
  });
};