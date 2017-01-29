function Node(data){
	this.data = data
	this.next = null
}

function reorder(a) {
  function size(head) {
    var size = 0;
    while(head != null) {
      size++;
      head = head.next;
    }
    return size;
  }

  function getMidPoint(head, size) {
    var midpoint = head;
    var count = 1;
    while(size/2 >= count) {
      midpoint = midpoint.next;
      count++;
    }
    return midpoint;
  }

  function reverse(head) {
    var prev = null;
    var current = head;
    var next = head.next;
    while(current !== null) {
      current.next = prev;
      prev = current;
      current = next;
      next = next && next.next;
    }
    return prev;
  }

  function alternateMerge(n1, n2) {
    var first = n1;
    var second = n2;
    while(first !== null && second !== null) {
      var firstNext = first.next;
      var secondNext = second.next;

      // if(secondNext) {
        first.next = second;
      // }
      if(firstNext) {
        second.next = firstNext;
      }
      first = firstNext;
      second = secondNext;
    }
    return n1;
  }

  function removeLastNode(head) {
    var currentNode = head;
    while(currentNode.next && currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    return head;
  }

  if(!a) {
    return null;
  }
  if(!a.next) {
    return a;
  }
  var middle = getMidPoint(a, size(a));

  var reversed = reverse(middle);
  var current = removeLastNode(a);

  return alternateMerge(current, reversed);
}

var A = new Node(1);
var B = new Node(2);
var C = new Node(3);
var D = new Node(4);
var E = new Node(5);
A.next = B;
// B.next = C;
// C.next = D;
// D.next = E;

function print(head) {
  var sentence = '';
  while(head != null) {
    sentence += (head.data + ' --> ');
    head = head.next;
  }
  console.log(sentence);
}

// console.log(size(A));
print(reorder(A));
