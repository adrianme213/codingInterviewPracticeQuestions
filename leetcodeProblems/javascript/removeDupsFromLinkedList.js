/*
Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

 

Example 1:

Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]

Example 2:

Input: head = [1,1,1,2,3]
Output: [2,3]
 

Constraints:

    The number of nodes in the list is in the range [0, 300].
    -100 <= Node.val <= 100
    The list is guaranteed to be sorted in ascending order.
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

const deleteDuplicates = function(head) {
  if (head && head.next && head.val === head.next.val) {
    head = traverse(head);
  }

  if (!head || !head.next) {
    return head;
  }

  let prev = head;
  let curr = head;

  while (curr) {
    if (curr.next && curr.val === curr.next.val) {
      curr = traverse(curr);
      prev.next = curr;
    }

    if (curr) {
      prev = curr;
      curr = curr.next;
    }
  }

  return head;
}

function traverse(curr) {
  let dupe = curr;

  while (curr && dupe && dupe.val === curr.val) {
    curr = curr.next;
    if (curr && dupe.val !== curr.val) {
      if (curr.next && curr.val === curr.next.val) {
        dupe = curr;
      }
    }
  }

  return curr;
}