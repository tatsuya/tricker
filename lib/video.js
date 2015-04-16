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
 * @param  {Function} fn
 */
exports.getRange = function(from, to) {
  // Array.prototype.slice extracts up to but not including end.
  if (to !== -1) {
    to += 1
  } else {
    to = videos.length;
  }

  return videos.slice(from, to);
};

exports.filterByTag = function(tag) {
  return videos.filter(function(video) {
    var tags = video.tags;
    return tags.indexOf(tag) >= 0;
  });
};

/**
 * Retrieve the list's cardinality (the number of elements)
 *
 * @param  {Function} fn
 * @public
 */
exports.count = function(fn) {
  fn(null, videos.length);
};
