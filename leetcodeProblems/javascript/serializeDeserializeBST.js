/*
Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure.

The encoded string should be as compact as possible.



Example 1:

Input: root = [2,1,3]
Output: [2,1,3]

Example 2:

Input: root = []
Output: []



Constraints:

    The number of nodes in the tree is in the range [0, 104].
    0 <= Node.val <= 104
    The input tree is guaranteed to be a binary search tree.
*/
/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }

 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

 var insert = (node, val) => {
     if (val > node.val) {
         if (node.right) insert(node.right, val);
         else node.right = new TreeNode(val);
     } else if (val< node.val) {
         if (node.left) insert(node.left, val);
         else node.left = new TreeNode(val);
     }
 }
 /**
  * Encodes a tree to a single string.
  *
  * @param {TreeNode} root
  * @return {string}
  */
 var serialize = function(root) {
     let res = "";
     if(!root) return res;

     const myQueue = [];
     myQueue.push(root);
     while(myQueue.length > 0) {
         const curr = myQueue.shift();
         res += curr.val+ " ";

         if(curr.left) myQueue.push(curr.left);
         if(curr.right) myQueue.push(curr.right);
     }
     res = res.slice(0, res.length-1);

     return res;
 };

 /**
  * Decodes your encoded data to tree.
  *
  * @param {string} data
  * @return {TreeNode}
  */
 var deserialize = function(data) {
     if(data.length === 0) return null;
     let root = null;
     const nodesArr = data.split(" ");
     while(nodesArr.length > 0) {
         const currNode = nodesArr.shift();
         if(root === null) {
             const val = Number(currNode);
             root = new TreeNode(val)
         } else {
             const val = Number(currNode);
             insert(root, val);
         }
     }

     return root;
 };
