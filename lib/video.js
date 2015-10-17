var videos = require('../data/videos_2');

exports.list = function() {
  return videos;
};

/**
 * Retrieve the specified entries. The offsets from and to are zero-based
 * indexes, with 0 being the first element of the list (the head of the list),
 * 1 being the next element and so on.
 *
 * @param  {Integer} from
 * @param  {Integer} to
 */
exports.getRange = function(from, to, tag) {
  var ret;
  if (tag) {
    ret = exports.filterByTag(tag);
  } else  {
    ret = videos;
  }
  // Array.prototype.slice extracts up to but not including end.
  if (to !== -1) {
    to += 1
  } else {
    to = ret.length;
  }

  return ret.slice(from, to);
};

/**
 * Returns videos which includes the given tag in a tags property.
 *
 * @param  {String} tag
 * @return {Array} List of videos
 */
exports.filterByTag = function(tag) {
  return videos.filter(function(video) {
    var tags = video.tags;
    return tags.indexOf(tag) >= 0;
  });
};

/**
 * Retrieve the number of videos
 *
 * @param  {Function} fn - Callback
 * @public
 */
exports.count = function(fn) {
  fn(null, videos.length);
};
