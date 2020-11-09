/*
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

    The left subtree of a node contains only nodes with keys less than the node's key.
    The right subtree of a node contains only nodes with keys greater than the node's key.
    Both the left and right subtrees must also be binary search trees.

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true

Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

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

var isValidBST = function(root, parent=null) {
    if(root === null) return true;

    if(root.left) {
        if(root.val <= root.left.val) {
            return false;
        }

        if(!isValidBST(root.left, root.val)) {
            return false;
        }
        if(findMax(root.left) >= root.val) return false;

    }

    if(root.right) {
        if(root.val >= root.right.val) {
            return false;
        }

        if(!isValidBST(root.right, root.val)) {
            return false;
        }
        if(findMin(root.right) <= root.val) return false;
    }

    return true;
};
