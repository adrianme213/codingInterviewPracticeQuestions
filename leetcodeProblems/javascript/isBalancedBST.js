/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

    a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

 

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:

Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:

Input: root = []
Output: true

 

Constraints:

    The number of nodes in the tree is in the range [0, 5000].
    -104 <= Node.val <= 104

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
 * @return {boolean}
 */
var isBalanced = function(root) {
    const pairs = [];
    
    const findDepth = (node, depth, curMax=0) => {
        if(node === null) return null;
        if(depth > curMax) curMax = depth;
        let left;
        let right;
        if(node.left) {
            left = findDepth(node.left, depth+1, curMax);
        }
        if(node.right) {
            right = findDepth(node.right, depth+1, curMax);
        }
        
        if(left && left > curMax) {
            curMax = left;
        }
        if(right && right > curMax) {
            curMax = right;
        }
        
        return curMax;
    }
    
    const traverse = (node, depth) => {
        if(node === null) return null;

        let leftVal = 0;
        let rightVal = 0;
        
        if(node.left) {
            leftVal = findDepth(node.left, depth+1);
            traverse(node.left, 0);
        }
        if(node.right) {
            rightVal = findDepth(node.right, depth+1);
            traverse(node.right, 0);
        }
        
        pairs.push([leftVal, rightVal]);        
    }
    traverse(root, 0);

    for(let ii = 0; ii < pairs.length; ii++) {
        if(Math.abs(pairs[ii][0]-pairs[ii][1]) > 1) return false;
    }
    return true;
};