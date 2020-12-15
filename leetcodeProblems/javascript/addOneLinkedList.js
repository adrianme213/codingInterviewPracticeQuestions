/*
Given a non-negative integer represented as a linked list of digits, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list.

Example 1:
Input: head = [1,2,3]
Output: [1,2,4]

Example 2:
Input: head = [0]
Output: [1]

Constraints:

    The number of nodes in the linked list is in the range [1, 100].
    0 <= Node.val <= 9
    The number represented by the linked list does not contain leading zeros except for the zero itself. 

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
 * @return {ListNode}
 */
var reverseLinkedList = (head) => {
    let prev = null;
    let curr = head;
    while(curr) {
        const temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
}


var plusOne = function(head) {
    const oneList = new ListNode(1);
    const reversed = reverseLinkedList(head);
    
    let o = oneList;
    let rPrev = null;
    let r = reversed;
    let remainder = 0;
    
    while(o || r || remainder) {
        const sum = (o !== null ? o.val : 0) + (r !== null ? r.val : 0) + remainder;
        if(sum >= 10) remainder = 1;
        else remainder = 0;
        if(r) {
            r.val = sum%10;
        } else {
            rPrev.next = new ListNode(sum%10)
        }
        
        o = o !== null ? o.next : null;
        rPrev = r;
        r = r !== null ? r.next : null;
    }

    return reverseLinkedList(reversed);
};