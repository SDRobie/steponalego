function largestOfFour(arr) {
  var resArray = [];
    for (i=0; i < arr.length; i++) {
  var bigNum = 0;
    for (k=0; k < arr[i].length; k++) {
      if (arr[i][k] > bigNum) {
        bigNum = arr[i][k];
      }
    }
  resArray[i] = bigNum;
}
return resArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//another example of knowing when to use an empty array to output an answer
