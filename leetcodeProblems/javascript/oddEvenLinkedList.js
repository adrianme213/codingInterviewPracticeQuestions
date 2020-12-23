/*
Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example 1:

Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL

Example 2:

Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL

 

Constraints:

    The relative order inside both the even and odd groups should remain as it was in the input.
    The first node is considered odd, the second node even and so on ...
    The length of the linked list is between [0, 10^4].


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
var oddEvenList = function(head) {
    if(head === null) return null;
    let evenList = null;
    let oddList = null;
    let odd = null;
    let even = null;
    let idx = 1;
    let curr = head;

    while(curr) {
        const node = curr;   
        curr = curr.next;
        node.next = null;

        if(idx%2 === 1) {
            if(oddList === null) {
                oddList = node;
                odd = oddList;
            } else {
                oddList.next = node;
                oddList = node;
            }
        } else {
            if(evenList === null) {
                evenList = node;
                even = evenList;
            } else {
                evenList.next = node;
                evenList = node;
            }
        }
        
        idx++;
    }
    
    let prev = null;
    curr = odd;
    while(curr) {
        prev = curr;
        curr = curr.next;
    }
    prev.next = even;
    
    return odd;
};