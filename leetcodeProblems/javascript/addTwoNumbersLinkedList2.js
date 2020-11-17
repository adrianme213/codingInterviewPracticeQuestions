/*
You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7

*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var reverseLinkedList = (li) => {
    let prev = null;
    let curr = li;
    while(li !== null) {
        const temp = li.next;
        li.next = prev;
        prev = li;
        li = temp;
    }
    return prev;
}


var addTwoNumbers = function(l1, l2) {
    let list = null;
    let head;
    let r1 = reverseLinkedList(l1);
    let r2 = reverseLinkedList(l2);
    let carry1 = 0;

    while(r1 !== null || r2 !== null || carry1 === 1) {
        const v1 = r1 !== null ? r1.val : 0;
        const v2 = r2 !== null ? r2.val : 0;

        const sum = v1 + v2 + carry1;
        if(sum > 9) carry1 = 1;
        else carry1 = 0;
        let node = new ListNode(sum%10);
        if(list === null) {
            head = node;
            list = node;
        } else {
            list.next = node;
            list = list.next;
        }

        r1 !== null ? r1 = r1.next : null;
        r2 !== null ? r2 = r2.next : null;
    }

    head = reverseLinkedList(head);
    return head;
};
