function isSudoku(a) {
  var index = 0;
  var size = a.length;

  function isRowValid(idx) {
    var seenNums = {};
    for(var i=0; i<size; i++) {
      var num = a[idx][i];
      if(seenNums[num] && num !== '.') {
        return false;
      }
      seenNums[num] = true;
    }
    return true;
  }

  function isColumnValid(idx) {
    var seenNums = {};
    for(var i=0; i<size; i++) {
      var num = a[i][idx];
      if(seenNums[num] && num !== '.') {
        return false;
      }
      seenNums[num] = true;
    }
    return true;
  }

  function isSquareValid(idx) {
    var seenNums = {};
    var squareSize = Math.sqrt(size);
    for(var i=0; i<squareSize; i++) {
      for(var j=0; j<squareSize; j++) {
        var col = (idx % squareSize) * squareSize + j;
        var row = Math.floor(idx/squareSize) * squareSize + i;
        var num = a[row][col];
        if(seenNums[num] && num !== '.') {
          return false;
        }
        seenNums[num] = true;
      }
    }
    return true;
  }

  while(index < size) {
    if(!isRowValid(index) || !isColumnValid(index) || !isSquareValid(index)) {
      return 0;
    }
    index++;
  }

  return 1;
}

var x = [ "....5..1.", ".4.3.....", ".....3..1", "8......2.", "..2.7....", ".15......", ".....2...", ".2.9.....", "..4......" ]

console.log(isSudoku(x));
