/*
Given two binary search trees, return True if and only if there is a node in the first tree and a node in the second tree whose values sum up to a given integer target.

Example 1:
Input: root1 = [2,1,4], root2 = [1,0,3], target = 5
Output: true
Explanation: 2 and 3 sum up to 5.

Example 2:
Input: root1 = [0,-10,10], root2 = [5,1,7,0,2], target = 18
Output: false
 
Constraints:
Each tree has at most 5000 nodes.
-10^9 <= target, node.val <= 10^9

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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @param {number} target
 * @return {boolean}
 */
var twoSumBSTs = function(root1, root2, target) {
    const tree1 = {};
    
    const traverseDFS = (node, action="dict") => {
        if(node === null) return false;

        if(action === "dict") {
            tree1[node.val] = node.val;
        } else if(action === "lookup") {
            if(tree1[target-node.val] !== undefined) {
                return true;
            }
        }
        
        if(node.left) {
            const isResultTrue = traverseDFS(node.left, action);
            if(isResultTrue) return true
        }
        if(node.right) {
            const isResultTrue = traverseDFS(node.right, action);
            if(isResultTrue) return true;
        }
        return false;
    }
    traverseDFS(root1, "dict");
    const result = traverseDFS(root2, "lookup");
    
    return result;
};