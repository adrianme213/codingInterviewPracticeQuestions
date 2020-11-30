/*
You have n  tiles, where each tile has one letter tiles[i] printed on it.

Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.

Example 1:

Input: tiles = "AAB"
Output: 8
Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".

Example 2:

Input: tiles = "AAABBC"
Output: 188

Example 3:

Input: tiles = "V"
Output: 1

Constraints:

    1 <= tiles.length <= 7
    tiles consists of uppercase English letters.

*/
/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    const set = new Set([]);
    
    const traverse = (tilesLeft, curStr) => {
        if(curStr.length > 0 && !set.has(curStr)) {
            set.add(curStr);
        }
        
        for(let ii = 0; ii < tilesLeft.length; ii++) {
            const tileRemoved = tilesLeft.splice(ii, 1);
            curStr += tileRemoved[0];
            traverse(tilesLeft, curStr);
            curStr = curStr.slice(0, curStr.length-1);
            tilesLeft.splice(ii, 0, tileRemoved[0]);
        }
    }
    traverse(tiles.split(''), "");

    return set.size;
};