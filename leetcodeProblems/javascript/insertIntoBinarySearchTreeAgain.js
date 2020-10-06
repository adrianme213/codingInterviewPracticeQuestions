/*
You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.
Example 1:
Input: root = [4,2,7,1,3], val = 5
Output: [4,2,7,1,3,5]

Example 2:
Input: root = [40,20,60,10,30,50,70], val = 25
Output: [40,20,60,10,30,50,70,null,null,25]

Example 3:
Input: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
Output: [4,2,7,1,3,5]

Constraints:

    The number of nodes in the tree will be in the range [0, 104].
    -108 <= Node.val <= 108
    All the values Node.val are unique.
    -108 <= val <= 108
    It's guaranteed that val does not exist in the original BST.

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    const node = new TreeNode(val);
    if(root === null) return node;
    let notInserted = true;
    let curr = root;

    while(notInserted) {
        if(node.val < curr.val && curr.left === null) {
            curr.left = node;
            notInserted = false;
        } else if(node.val > curr.val && curr.right === null) {
            curr.right = node;
            notInserted = false;
        } else if(node.val < curr.val) {
            curr = curr.left;
        } else if(node.val > curr.val) {
            curr = curr.right;
        }
    }

    return root;
};
