/*
You have n gardens, labeled from 1 to n, and an array paths where paths[i] = [xi, yi] describes a bidirectional path between garden xi to garden yi. In each garden, you want to plant one of 4 types of flowers.

All gardens have at most 3 paths coming into or leaving it.

Your task is to choose a flower type for each garden such that, for any two gardens connected by a path, they have different types of flowers.

Return any such a choice as an array answer, where answer[i] is the type of flower planted in the (i+1)th garden. The flower types are denoted 1, 2, 3, or 4. It is guaranteed an answer exists.
Example 1:

Input: n = 3, paths = [[1,2],[2,3],[3,1]]
Output: [1,2,3]
Explanation:
Gardens 1 and 2 have different types.
Gardens 2 and 3 have different types.
Gardens 3 and 1 have different types.
Hence, [1,2,3] is a valid answer. Other valid answers include [1,2,4], [1,4,2], and [3,2,1].

Example 2:

Input: n = 4, paths = [[1,2],[3,4]]
Output: [1,2,1,2]

Example 3:

Input: n = 4, paths = [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]
Output: [1,2,3,4]

Constraints:

    1 <= n <= 104
    0 <= paths.length <= 2 * 104
    paths[i].length == 2
    1 <= xi, yi <= n
    xi != yi
    Every garden has at most 3 paths coming into or leaving it.
*/
/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(n, paths) {
    if(paths.length === 0) return new Array(n).fill(1);
    
    const adj = new Array(n+1).fill(1).map(num => new Array());
    const answer = new Array(n+1).fill(0);
    
    for(let ii = 0; ii < paths.length; ii++) {
        const temp = paths[ii];
        if(!adj[temp[0]].includes(temp[1])) adj[temp[0]].push(temp[1]);
        if(!adj[temp[1]].includes(temp[0])) adj[temp[1]].push(temp[0]);
    }
    
    for(let ii = 1; ii <= n; ii++) {
        const temp = adj[ii].map(num => answer[num]);
        answer[ii] = temp.includes(1) ? (temp.includes(2) ? (temp.includes(3) ? 4: 3): 2): 1
    }

    return answer.slice(1);
};
