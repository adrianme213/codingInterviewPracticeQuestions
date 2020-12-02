/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:

Input: root = [1,null,2]
Output: 2

Example 3:

Input: root = []
Output: 0

Example 4:

Input: root = [0]
Output: 1

Constraints:

    The number of nodes in the tree is in the range [0, 104].
    -100 <= Node.val <= 100

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
var maxDepth = function(root) {
    let max = 0;
    
    const traverse = (node, depth=0) => {
        if(node === null) return depth;
        depth += 1;
        if(depth > max) max = depth;
        if(node.left) traverse(node.left, depth);
        if(node.right) traverse(node.right, depth);
    }
    
    traverse(root);
    return max;
};