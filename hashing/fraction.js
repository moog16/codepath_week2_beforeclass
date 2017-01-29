// function getNumChars(nums) {
//   var numChars = {};
//   for(var i=0; i<nums.length; i++) {
//     var num = nums[i];
//     if(numChars[num]) {
//       numChars[num]++;
//     } else {
//       numChars[num] = 1;
//     }
//   }
//   return numChars;
// }
//
// function isRepeating(repeatingNums, indexOffset, nums) {
//   var repeatingNumber = '';
//   var index = indexOffset;
//
//   for(var rNum in repeatingNums) {
//     var compareNum = nums[index];
//     var compareIndex = repeatingNums[compareNum];
//
//     if(compareIndex+indexOffset !== index) {
//       return false;
//     } else {
//       repeatingNumber += nums[index];
//       index++;
//     }
//   }
//   return repeatingNumber;
// }
//
// function formatRepeating(nums) {
//   var startRepeatingIndex = 0;
//   var endRepeatingIndex = 0;
//   var numChars = getNumChars(nums);
//
//   var searchIndex = 0;
//   var seenNums = {};
//   while(searchIndex < nums.length) {
//     var num = nums[searchIndex];
//     if(numChars[num] <= 1) {
//       searchIndex++;
//       continue;
//     }
//
//     if(seenNums[num] !== undefined) {
//       var _isRepeating = isRepeating(seenNums, searchIndex, nums);
//       var firstNumIndex = seenNums[num];
//
//       if(_isRepeating) {
//         return '('+_isRepeating+')';
//       }
//     } else {
//       seenNums[num] = searchIndex;
//     }
//     searchIndex++;
//   }
//   return num;
// }

function fraction(num, den) {
  function getNumChars(nums) {
    var numChars = {};
    for(var i=0; i<nums.length; i++) {
      var num = nums[i];
      if(numChars[num]) {
        numChars[num]++;
      } else {
        numChars[num] = 1;
      }
    }
    return numChars;
  }

  function __isRepeating(repeatingNums, indexOffset, nums) {
    var repeatingNumber = '';
    var index = indexOffset;

    for(var rNum in repeatingNums) {
      var compareNum = nums[index];
      var compareIndex = repeatingNums[compareNum];

      if(compareIndex+indexOffset !== index) {
        return false;
      } else {
        repeatingNumber += nums[index];
        index++;
      }
    }
    return repeatingNumber;
  }

  function formatRepeating(nums, ignoreFirstZeroes) {
    var startRepeatingIndex = 0;
    var endRepeatingIndex = 0;
    var numChars = getNumChars(nums);

    var searchIndex = 0;
    var seenNums = {};
    while(searchIndex < nums.length) {
      var num = nums[searchIndex];
      if(numChars[num] <= 1 || ignoreFirstZeroes && num === '0') {
        searchIndex++;
        continue;
      }

      if(seenNums[num] !== undefined) {
        var _isRepeating = __isRepeating(seenNums, searchIndex, nums);
        var firstNumIndex = seenNums[num];

        if(_isRepeating) {
          return '('+_isRepeating+')';
        }
      } else {
        seenNums[num] = searchIndex;
      }
      searchIndex++;
    }
    return nums;
  }

  function undoScience(scientific) {
    var multiplier = parseInt(scientific[1]);
    var _num = scientific[0];
    var splitNum = _num.split('.');
    var wholeNum = splitNum[0];
    if(multiplier < 0) {
      var beginQ = '';
      for(var i=(wholeNum.length); i< -multiplier; i++) {
        beginQ += '0';
      }
      return '0.' + beginQ + splitNum[0] + splitNum[1];
    } else {
      // quotient =
    }
  }

  var quotient = num/den;
  quotient = quotient.toPrecision(21) +  '';
  if(quotient === '0') {
    return '0';
  }
  var isRepeating = den%3 === 0;
  var scientific = quotient.split('e');
  var isScientific = scientific.length === 2;
  if(isScientific) {
    quotient = undoScience(scientific);
  }
  var decimal = quotient.split('.');
  if(decimal.length === 1) {
    return decimal[0]
  }
  var wholeNum = decimal[0];
  var fractionalNum = formatRepeating(decimal[1], isScientific);

  var x = [wholeNum, fractionalNum].join('.');

  if(isNaN(x)) {
    return x;
  }
  return parseFloat(x) + "";
}


var x = fraction(2, 3);
console.log(x)

x = fraction(2, 4);
console.log(x)

x = fraction(-1, -2147483648);
console.log(x)

x = fraction(1, 3);
console.log(x)
