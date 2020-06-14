/*
Given an array of strings, group anagrams together.

Example:
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

Note:
  All inputs will be in lowercase.
  The order of your output does not matter.

*/

var groupAnagrams = function(strs) {
  const hashMap = {};

  for(let ii = 0; ii < strs.length; ii++) {
    const sortedWord = [...strs[ii]].sort().join('');

    if(hashMap[sortedWord] === undefined) {
      hashMap[sortedWord] = [strs[ii]];
    } else {
      hashMap[sortedWord].push(strs[ii]);
    }
  }

  return Object.values(hashMap);
};
