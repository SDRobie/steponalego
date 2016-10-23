function destroyer(arr) {
var args = Array.prototype.slice.call(arguments);
  //Array.slice returns portion of the array beginning @ 1st index, ending @ 2nd
  //arguments is an array-like object
  args.splice(0, 1);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
