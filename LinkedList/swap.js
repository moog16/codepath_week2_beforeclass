function Node(data){
	this.data = data
	this.next = null
}

function swapPairs(a) {
  function swapNodes(head) {
    if(head.next === null) {
      return head;
    }
    var last = head;
    var first = head.next;
    first.next = last;
    last.next = null;
    return last;
  }

  if(!a.next) {
    return a;
  }

  var head = a.next;
  var currentNode = a;
  while(currentNode !== null) {
    var nextSwap = currentNode.next && currentNode.next.next;
    var first = swapNodes(currentNode);
    if(nextSwap === null) {
      break;
    } else if(nextSwap.next === null) {
      first.next = nextSwap;
    } else {
      first.next = nextSwap.next;
    }
    currentNode = nextSwap;
  }
  return head;
}

var A = new Node(1);
var B = new Node(2);
var C = new Node(3);
var D = new Node(4);
var E = new Node(5);
// A.next = B;
// B.next = C;
// C.next = D;
// D.next = E;

console.log(swapPairs(A));
