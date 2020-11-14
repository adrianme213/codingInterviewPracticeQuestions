/*
Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

Example 1:

Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
Output: true

Example 2:

Input: root1 = [1], root2 = [1]
Output: true

Example 3:

Input: root1 = [1], root2 = [2]
Output: false

Example 4:

Input: root1 = [1,2], root2 = [2,2]
Output: true

Example 5:

Input: root1 = [1,2,3], root2 = [1,3,2]
Output: false

Constraints:
  The number of nodes in each tree will be in the range [1, 200].
  Both of the given trees will have values in the range [0, 200].

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
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const leaves1 = [];
    const leaves2 = [];
    const traverseDFS = (root, leaves) => {
        if(root === null) return;
        if(root.left === null && root.right === null) {
            leaves.push(root.val);
        }

        if(root.left) {
            traverseDFS(root.left, leaves);
        }
        if(root.right) {
            traverseDFS(root.right, leaves);
        }
    }
    traverseDFS(root1, leaves1);
    traverseDFS(root2, leaves2);

    if(leaves1.length !== leaves2.length) return false;
    for(let ii = 0; ii < leaves1.length; ii++) {
        if(leaves1[ii] !== leaves2[ii]) return false;
    }
    return true;
};
