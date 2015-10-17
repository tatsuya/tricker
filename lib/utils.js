// Code extracted from:
// https://github.com/nodejs/node/blob/master/lib%2Futil.js
exports.extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (add === null || typeof add !== 'object') return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};