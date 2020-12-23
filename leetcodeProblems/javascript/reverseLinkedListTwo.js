/*
Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:

Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL


*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let prev = null;
    let curr = head;
    let idx = 1;
    while(idx < m) {
        prev = curr;
        curr = curr.next;
        idx++;
    }
    let firstLinkedList = prev;

    let tempStorage = [];
    while(idx <= n) {
        tempStorage.push(curr);
        prev = curr;
        curr = curr.next;
        idx++;
    }

    let remainingLinkedList = tempStorage[tempStorage.length-1].next;
    tempStorage = tempStorage.reverse().map(n => {
        n.next = null;
        return n;
    });

    for(let ii = 0; ii < tempStorage.length-1; ii++) {
        const node = tempStorage[ii];
        node.next = tempStorage[ii+1] || null;
    }
    
    if(firstLinkedList) {
        firstLinkedList.next = tempStorage[0];
    } else {
        head = tempStorage[0];
    }
    tempStorage[tempStorage.length-1].next = remainingLinkedList;
    
    return head;
};