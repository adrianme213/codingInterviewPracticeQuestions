/*
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

 

Example 1:

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: l1 = [], l2 = []
Output: []

Example 3:

Input: l1 = [], l2 = [0]
Output: [0]

 

Constraints:

    The number of nodes in both lists is in the range [0, 50].
    -100 <= Node.val <= 100
    Both l1 and l2 are sorted in non-decreasing order.

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
var mergeTwoLists = function(l1, l2) {
    let p1 = l1;
    let p2 = l2;
    let p = null;
    let result = null;
    
    while(p1 || p2) {
        if(p1 && p2) {
            if(p === null) {
                p = p1.val < p2.val ? p1 : p2;
                p1.val < p2.val ? p1 = p1.next : p2 = p2.next;
                result = p;
            } else {
                p.next = p1.val < p2.val ? p1 : p2;
                p = p.next;
                p1.val < p2.val ? p1 = p1.next : p2 = p2.next;
            }
        } else if(p1) {
            if(p === null) {
                p = p1;
                p1 = p1.next;
                result = p;
            } else {
                p.next = p1;
                p = p.next;
                p1 = p1.next;
            }
        } else if(p2) {
            if(p === null) {
                p = p2;
                p2 = p2.next;
                result = p;
            } else {
                p.next = p2;
                p = p.next;
                p2 = p2.next;
            }
        }
    }
    return result;
};