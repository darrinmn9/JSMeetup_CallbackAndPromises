function sumArray(array) {

  //declare a variable to keep track of our greatestSum
  var greatestSum;

  //loop through then entire array
  for (var i = 0; i < array.length; i++) {

    //each time you loop, initialize a varaible "sum"
    var sum;

    //loop through the array, starting from the current letter 'i' to the end
    for (var j = i; j < array.length; j++) {
      //compute the sum for each subset or the array
      if (sum === undefined) {
        sum = array[j];
      } else {
        sum += array[j];
      }

      //if the sum is greater than our current "greatestSum", replace it
      if (greatestSum === undefined || sum > greatestSum) {
        greatestSum = sum;
      }
    }
  }

  //once we are done iterating through the entire array, return our greatestSum

  return greatestSum;

}

//time complexity is n^2, as we are looping through a subarray for every index in the initial array



var sumArray_BetterSolution = function(array) {
  var maxSum = Number.NEGATIVE_INFINITY;
  var currentSum = 0;
  for(var i = 0; i < array.length; i++) {
    currentSum += array[i];
    //compare the current maxSum to the currentSum, take the greatest of the two
    maxSum = Math.max(maxSum, currentSum);

    // if(currentSum > maxSum){
    //   maxSum = currentSum;
    // }

    //if the current sum is ever less than 0, forget it and start over at 0
    if(currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
};

//time complexity is n, we only look through the array once
