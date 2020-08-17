// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// input - value
// output - string version of value
var stringifyJSON = function(obj) {
  // if obj is a string
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    var results = [];
    //iterate through, recursive call each element
    for (var i = 0; i < obj.length; i++) {
      results.push(stringifyJSON(obj[i]));
    }
    return '[' + results.join(',') + ']';
  }

  if (obj && typeof obj === 'object') {
    if (obj === undefined || typeof obj === 'function') {
      return '{}';
    }
    var results = [];
    //iterate and recursive call
    for (var key in obj) {
      if (obj[key] !== undefined && typeof(obj[key]) !== 'function') {
        results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + results.join(',') + '}';
  }

  return '' + obj;
};
