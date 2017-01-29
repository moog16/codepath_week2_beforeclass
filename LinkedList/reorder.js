function Node(data){
	this.data = data
	this.next = null
}

function reorder(a) {
  function getAndSetLast(node) {
    if(node === null || node.next === null) {
      return null;
    }

    while(node.next.next !== null) {
      node = node.next;
    }
    var returnNode = node.next;
    node.next = null;
    return returnNode;
  }

  var currentNode = a;

  while(currentNode !== null || currentNode.next !== null || currentNode.next.next !== null) {
    if(currentNode.next === null || currentNode.next.next === null) {
      break;
    }
    //setup change next
    var nextNext = currentNode.next;


    // get last digit
    var next = getAndSetLast(currentNode);
    if(!next || !nextNext) {
      break;
    }
    next.next = nextNext;
    currentNode.next = next;

    //change currentNode
    currentNode = nextNext;
  }
  return a;
}

var A = new Node(1);
var B = new Node(2);
var C = new Node(3);
var D = new Node(4);
var E = new Node(5);
A.next = B;
B.next = C;
C.next = D;
// D.next = E;

function print(head) {
  var sentence = '';
  while(head != null) {
    sentence += (head.data + ' --> ');
    head = head.next;
  }
  console.log(sentence);
}

print(reorder(A));
