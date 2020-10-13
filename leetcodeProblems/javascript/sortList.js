/*
Given the head of a linked list, return the list after sorting it in ascending order.

Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

 Example 1:

Input: head = [4,2,1,3]
Output: [1,2,3,4]

Example 2:

Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]

Example 3:

Input: head = []
Output: []



Constraints:

    The number of nodes in the list is in the range [0, 5 * 104].
    -105 <= Node.val <= 105

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
var sortList = function(head) {
    let didSortOccur = true;
    let prev = null;
    let curr = head;
    let alwaysHead = head;

    while(didSortOccur) {
        didSortOccur = false;

        while(curr) {
            let temp = curr.next;

            // If swap conditions, swap
            if(temp !== null && temp.val < curr.val) {
                const tempNext = temp.next;
                const newTemp = curr;

                if(prev) {
                    prev.next = temp;
                } else {
                    alwaysHead = temp;
                }
                curr.next = tempNext;
                curr = temp;
                curr.next = newTemp;
                temp = newTemp;
                didSortOccur = true;
            }

            // Advance LinkedList
            prev = curr;
            curr = temp;
        }

        // Reset starting conditions;
        curr = alwaysHead;
        prev = null;
    }

    return alwaysHead;
};
