/*
Given the root of a binary tree, find the maximum value V for which there exist different nodes A and B where V = |A.val - B.val| and A is an ancestor of B.

A node A is an ancestor of B if either: any child of A is equal to B, or any child of A is an ancestor of B.

Example 1:

Input: root = [8,3,10,1,6,null,14,null,null,4,7,13]
Output: 7
Explanation: We have various ancestor-node differences, some of which are given below :
|8 - 3| = 5
|3 - 7| = 4
|8 - 1| = 7
|10 - 13| = 3
Among all possible differences, the maximum value of 7 is obtained by |8 - 1| = 7.

Example 2:

Input: root = [1,null,2,null,0,3]
Output: 3

Constraints:

    The number of nodes in the tree is in the range [2, 5000].
    0 <= Node.val <= 105


*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findMin = (root) => {
    if(root === null) return null;

    let min = root.val;
    if(root.left && root.left.val < min) min = root.left.val;
    if(root.left) {
        min = Math.min(findMin(root.left), min);
    }

    if(root.right && root.right.val < min) min = root.right.val;
    if(root.right) {
        min = Math.min(findMin(root.right), min);
    }
    return min;
}

var findMax = (root) => {
    if(root === null) return null;

    let max = root.val;
    if(root.left && root.left.val > max) max = root.left.val;
    if(root.left) {
        max = Math.max(findMax(root.left), max);
    }

    if(root.right && root.right.val > max) max = root.right.val;
    if(root.right) {
        max = Math.max(findMax(root.right), max);
    }
    return max;
}

var maxAncestorDiff = function(root) {
    let max = 0;
    if(root === null) return max;

    if(root.left) {
        const diffLeft = Math.abs(root.val - root.left.val);
        const minLeftDiff = Math.abs(root.val - findMin(root.left));
        const maxLeftDiff = Math.abs(root.val - findMax(root.left));
        max = Math.max(max, diffLeft, minLeftDiff, maxLeftDiff, maxAncestorDiff(root.left));
    }
    if(root.right) {
        const diffRight = Math.abs(root.val - root.right.val);
        const minRightDiff = Math.abs(root.val - findMin(root.right));
        const maxRightDiff = Math.abs(root.val - findMax(root.right));
        max = Math.max(max, diffRight, minRightDiff, maxRightDiff, maxAncestorDiff(root.right));
    }

    return max;
};
