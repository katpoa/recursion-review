// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node, result) {
  node = node || document.body;
  // make final result array
  result = result || [];
  // parse through each element in html
  // if element classlist contains class name
  if (node.classList.contains(className)) {
    // push to result array
    result.push(node);
  }
  // base case
  // iterate through child result
  for (var i = 0; i < node.children.length; i++) {
    // recusively call function on each element  }
    getElementsByClassName(className, node.children[i], result);
  }
  // return result array
  return result;
};
