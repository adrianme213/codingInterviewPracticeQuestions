const assertFunc = (bool, desc) => {
  if (!bool) {
    console.log('TEST FAILED: ', desc);
  } else {
    console.log('TEST PASSED!');
  }
}
const Node = function(val = null) {
  this.value = val;
  this.next = null;
}
const list1 = new Node('H');
  list1.next = new Node('A');
  list1.next.next = new Node('N');
  list1.next.next.next = new Node('N');
  list1.next.next.next.next = new Node('A');
  list1.next.next.next.next.next = new Node('H');

const list2 = new Node('H');
  list2.next = new Node('A');
  list2.next.next = new Node('P');
  list2.next.next.next = new Node('N');
  list2.next.next.next.next = new Node('A');
  list2.next.next.next.next.next = new Node('H');

const list3 = new Node('H');

const list4 = new Node('H');
  list4.next = new Node('A');
  list4.next.next = new Node('P');
  list4.next.next.next = new Node('P');
  list4.next.next.next.next = new Node('Y');
  list4.next.next.next.next.next = new Node('Y');
  list4.next.next.next.next.next.next = new Node('P');
  list4.next.next.next.next.next.next.next = new Node('P');
  list4.next.next.next.next.next.next.next.next = new Node('A');
  list4.next.next.next.next.next.next.next.next.next = new Node('H');


const isPalindrome = (str) => {
  if (str.length < 2) {
    return true;
  }
  if (str[0] === str[str.length-1]) {
    return isPalindrome(str.slice(1, str.length-1));
  }
  return false
}

const listPalindrome = (list) => {
  let temp = list;
  let str = [];
  while (temp !== null) {
    str.push(temp.value);
    temp = temp.next;
  }
  return isPalindrome(str.join(''));
}

assertFunc(listPalindrome(list1) === true, 'HANNAH test');
assertFunc(listPalindrome(list2) === false, 'HAPNAH test');
assertFunc(listPalindrome(list3) === true, 'H test');
assertFunc(listPalindrome(list4) === true, 'HAPPYYPPAH test');

// Space: O(n) with temporary result storing values
// Time: O(2n) -> O(n) with iterating through list once and then again to check palindrome
