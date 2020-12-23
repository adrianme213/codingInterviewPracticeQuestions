/*
Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example 1:

Given 1->2->3->4, reorder it to 1->4->2->3.

Example 2:

Given 1->2->3->4->5, reorder it to 1->5->2->4->3.

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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var getListLength = (head) => {
    let idx = 0;
    let curr = head;
    while(curr) {
        idx++;
        curr = curr.next;
    }
    return idx;
}

var getNodesAfterIdxInArr = (head, start) => {
    let idx = 0;
    let curr = head;
    while(idx < start) {
        idx++;
        curr = curr.next;
    }
    
    const result = [];
    while(curr) {
        result.push(curr);
        curr = curr.next;
    }
    return result;
}

var reorderList = function(head) {
    const len = getListLength(head);
    const toRemoveFromHereIdx = Math.floor(len/2);
    let nodesToPlace = getNodesAfterIdxInArr(head, toRemoveFromHereIdx);
    nodesToPlace = nodesToPlace.map(n => {
        n.next = null;
        return n;
    });

    let curr = head;
    while(curr && nodesToPlace.length > 0) {
        const tempNext = curr.next;
        const nextNode = nodesToPlace.pop();

        curr.next = nextNode;
        if(nextNode === tempNext) {
            nextNode.next = null;
        } else {
            nextNode.next = tempNext;
        }
        curr = tempNext;
    }
};