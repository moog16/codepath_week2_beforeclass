function anagrams(a) {
  function getAnagram(x) {
    var xLetters = {};
    for(var i=0; i<x.length; i++) {
      var letter = x[i];
      if(xLetters[letter]) {
        xLetters[letter]++;
      } else {
        xLetters[letter] = 1;
      }
    }
    return xLetters;
  }

  function _dontsort(arr) {
    var swapped;
    do {
      swapped = false;
      for (var i=0; i < a.length-1; i++) {
        if (arr[i] > arr[i+1]) {
          var temp = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    return arr;
  }

  function sortAnagramCount(letterCount) {
    var arr = [];
    for(var letter in letterCount) {
      arr.push(letter);
    }
    var sortedArr = _dontsort(arr);
    var sentence = '';
    for(var i=0; i<sortedArr.length; i++) {
      var letter = sortedArr[i];
      var count = letterCount[letter];
      sentence += letter + count;
    }
    return sentence;
  }

  var anagramCounts = {};

  for(var i=0; i<a.length; i++) {
    var anagramLetterCount = getAnagram(a[i]);

    var key = JSON.stringify(sortAnagramCount(anagramLetterCount));
    if(anagramCounts[key]) {
      anagramCounts[key].push(i+1);
    } else {
      anagramCounts[key] = [i+1];
    }
  }
  return anagramCounts;
}

console.log(anagrams([ "caat", "taac", "dog", "god", "acta"]))
// console.log(anagrams(['cat', 'dog', 'god', 'tca']));

// [1 2 ] [1 3 ] [1 4 ] [1 5 ] [1 6 ] [1 7 ] [1 8 ] [2 3 ] [2 4 ] [2 5 ] [2 6 ] [2 7 ] [2 8 ] [3 4 ] [3 5 ] [3 6 ] [3 7 ] [3 8 ] [4 5 ] [4 6 ] [4 7 ] [4 8 ] [5 6 ] [5 7 ] [5 8 ] [6 7 ] [6 8 ] [7 8 ]
