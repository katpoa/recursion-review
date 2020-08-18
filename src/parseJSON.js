// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var elements = json.split('');
  if (elements[0] === '[') {
    var results = [];
    for (var i = 0; i < elements.length; i ++) {
      if (elements[i] !== '"' && elements[i] !== '[' && elements[i] !== ']') {
        results.push(elements[i]);
      }
    }
    return results;
  }
  if (elements[0] === '{') {

    // create empty results obj
    var results = {};
    // iterate through elements
    for (var i = 0; i < elements.length; i++) {
      // if elements[i] === ':'
      // slice up to the index of the colon and set that as key
      // if (!elements.contains(',') && !elements[i] === ',' && )
      if (elements[i] === ':') {
        var key = elements.slice((elements.indexOf('{') + 2), (i - 1));
        key = key.join('');
        // slice from colon to next comma and set that the value
        var value = elements.slice((i + 3), (elements.length - 2));
        value = value.join('');
        results[key] = value;
        return results;
      }
    //     var key = elements.slice((elements.indexOf('{') + 2), (elements.indexOf(':') - 1));
    //     // slice from colon to next comma and set that the value
    //     var value = elements.slice((elements.indexOf(':') + 1), (i - 1));
    //     results[key] = value;
    //     parseJSON( '{' + elements.slice(i) );
    //   }
    }
    return results;
  }
};
