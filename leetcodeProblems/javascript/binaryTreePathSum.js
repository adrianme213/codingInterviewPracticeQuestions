/*
You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

Example:

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11
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
 * @param {number} sum
 * @return {number}
 */
var pathSum = (root, sum) => {
    let paths = 0;
    let k;
    let hashMap = {};

    const preorderFunc = (node, currSum) => {
        if(node === null) return;

        currSum += node.val;
        if(currSum === k) {
            paths++;
        }

        paths += hashMap[currSum-k] ? hashMap[currSum-k] : 0;
        hashMap[currSum] = hashMap[currSum] ? hashMap[currSum]+1 : 1;

        preorderFunc(node.left, currSum);
        preorderFunc(node.right, currSum);

        hashMap[currSum] -= 1;
    };

    k = sum;
    preorderFunc(root, 0);
    return paths;
}
