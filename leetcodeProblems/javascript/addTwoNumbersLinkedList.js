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
var reverseLinkedList = (linkedList) => {
    if(linkedList === null) return null;
    let prev = null;
    let next = linkedList.next;
    let l = linkedList;

    while(l) {
        const temp = l;
        l.next = prev;
        prev = l;
        l = next;
        if(next) {
            next = next.next;
        }
    }

    return prev;
}


var addTwoNumbers = function(l1, l2) {
    const r1 = reverseLinkedList(l1);
    const r2 = reverseLinkedList(l2);
    let leftover = 0;
    let p1 = r1;
    let p2 = r2;
    let sum;
    let head;

    while(p1 || p2 || leftover === 1) {
        if(p1 && p2) {
            const total = (p1.val + p2.val + leftover)%10;
            if(p1.val + p2.val + leftover >= 10) leftover = 1;
            else leftover = 0;

            if(!sum) {
                sum = new ListNode(total, null);
                head = sum;
            } else {
                sum.next = new ListNode(total, null);
                sum = sum.next;
            }

        } else if(p1) {
            const total = (p1.val + leftover)%10;
            if(p1.val + leftover >= 10) leftover = 1;
            else leftover = 0;

            sum.next = new ListNode(total, null);
            sum = sum.next;

        } else if(p2) {
            const total = (p2.val + leftover)%10;
            if(p2.val + leftover >= 10) leftover = 1;
            else leftover = 0;

            sum.next = new ListNode(total, null);
            sum = sum.next;
        } else if(leftover === 1) {
            sum.next = new ListNode(leftover, null);
            sum = sum.next;
            leftover = 0;
        }

        p1 = p1 ? p1.next : p1;
        p2 = p2 ? p2.next : p2;
    }

    head = reverseLinkedList(head);
    return head;
};
