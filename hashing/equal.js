function equal(a) {
  function filterMultiSums(sums) {
    var filtered = [];
    for(var sum in sums) {
      if(sums[sum].length > 2) {
        filtered.push(sums[sum]);
      }
    }
    return filtered;
  }

  function getAllDigitsIndex(index, arr) {
    var digits = [];
    for(var i=0; i<arr.length; i++) {
      digits.push(arr[i][index]);
    }
    return digits;
  }

  function getSmallestSum(sums) {
    var comparingIndex = 0;
    while(sums.length > 1) {
      var smallest = Math.min.apply(null, getAllDigitsIndex(comparingIndex, sums));
      for(var i=sums.length-1; i>=0; i--) {
        if(sums[i][comparingIndex] !== smallest) {
          sums.splice(i, 1);
        }
      }
      comparingIndex++;
    }
  }

  function getSmallestPairs(sums) {
    return sums.slice(0, 4);
  }

  function includes(arr, el) {
    var i = 0;
    while(i < arr.length) {
      if(arr[i] === el) {
        return true;
      }
      i++;
    }
    return false;
  }

  var seenSums = {};
  for(var i=0; i<a.length; i++) {

    var index = i+1;
    while(index < a.length) {
      var sum = a[index] + a[i];
      var seen = seenSums[sum];

      if(seen) {
        if(!includes(seen, i) && !includes(seen, index) ) {
          seenSums[sum] = seen.concat([ i, index ]);
        }
      } else {
        seenSums[sum] = [i, index];
      }

      index++;
    }
  }
  seenSums = filterMultiSums(seenSums);
  getSmallestSum(seenSums);
  seenSums = getSmallestPairs(seenSums[0]);
  return seenSums;
}

console.log(equal([9, 5, 4, 9, 3, 6, 8, 7, 1, 2, 8, 7, 2, 9, 7, 1, 3, 9, 7, 8, 1, 0, 5, 5]));
