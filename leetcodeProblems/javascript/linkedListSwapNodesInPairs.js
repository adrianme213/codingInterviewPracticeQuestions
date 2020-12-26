/*
Given a linked list, swap every two adjacent nodes and return its head.
You may not modify the values in the list's nodes. Only nodes itself may be changed.

Example 1:
Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:
Input: head = []
Output: []

Example 3:
Input: head = [1]
Output: [1]

 

Constraints:

    The number of nodes in the list is in the range [0, 100].
    0 <= Node.val <= 100

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
var swapPairs = function(head) {
    let result = null;
    let prev = null;
    let curr = head;
    let next = head ? head.next : null;
    if(!next) return head;
    
    while(curr && next) {
        const nextNext = next.next;
        const tripNext = nextNext ? nextNext.next : null;
        if(!prev) {
            prev = next;
        }
        
        next.next = null;
        if(prev) {
            prev.next = next;
        }
        if(!result) {
            result = next;
        }
        next.next = curr;
        curr.next = nextNext;
        
        prev = curr;
        curr = nextNext;
        next = tripNext;
        
    }
    return result;
};