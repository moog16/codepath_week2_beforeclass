function contains(firstLetters, letter) {
  for(var firstLetter in firstLetters) {
    if(letter === firstLetter) {
      return true;
    }
  }
  return false;
}

function isSubstringMatch(string, startingIndex, firstLetters, substringLength) {
  if(substringLength > string.length - startingIndex) {
    return false;
  }
  var possibleSubstr = string.slice(startingIndex, startingIndex+substringLength);
  // copy firstLetters obj
  var firstLettersCopy = JSON.parse(JSON.stringify(firstLetters));
  var possibleSubstrIndex = 0;

  while(possibleSubstrIndex < possibleSubstr.length) {
    var firstLetter = possibleSubstr[possibleSubstrIndex];
    var allWordsStartingWith = firstLettersCopy[firstLetter];
    if(!allWordsStartingWith || allWordsStartingWith.length === 0) {
      break;
    }
    var foundMatch = false;

    for(var i=0; i<allWordsStartingWith.length; i++) {
      var word = allWordsStartingWith[i];
      if(word === possibleSubstr.slice(possibleSubstrIndex, possibleSubstrIndex+word.length)) {
        possibleSubstrIndex += word.length;
        firstLettersCopy[firstLetter].splice(i, 1);
        foundMatch = true;
        if(firstLettersCopy[firstLetter].length === 0) {
          delete firstLettersCopy[firstLetter];
        }
        break;
      }
    }
    if(!foundMatch) {
      return false;
    }
  }

  return possibleSubstrIndex === possibleSubstr.length && isObjEmpty(firstLettersCopy);
}

function isObjEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
}

function getFirstLetterMap(arr) {
  var map = {};
  for(var i=0; i<arr.length; i++) {
    var word = arr[i];
    var firstLetter = word[0];
    if(map[firstLetter]) {
      map[firstLetter].push(word);
    } else {
      map[firstLetter] = [word];
    }
  }
  return map;
}

function findSubstring(a, b) {
  // b = array
  // a = long string
  var bLen = 0;
  for(var i=0; i<b.length; i++) {
    bLen += b[i].length;
  }
  if(bLen > a.length) {
    return [];
  }

  var substrMatches = [];
  var firstLetters = getFirstLetterMap(b);
  for(var i=0; i<a.length; i++) {
    if(contains(firstLetters, a[i]) && isSubstringMatch(a, i, firstLetters, bLen)) {
      substrMatches.push(i);
    }
  }

  return substrMatches;
}

var A = 'barfoothefoobarbooman';
var B = ["foo", "bar"];
var x = findSubstring(A, B);
console.log(x);

// var y = isSubstringMatch('barfoothefoobarbooman', 9, {
//   b: ['bar'],
//   f: ['foo']
// }, 6);
// console.log(y)
// S: "barfoothefoobarbooman"
// L: ["foo", "bar", "boo"]
