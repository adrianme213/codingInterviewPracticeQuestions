/* Implement a method to perform basic string stringCompression
using the ocunts of repeated characters. For example, the string
'aabcccccaaa' would become 'a2b1c5a3'. If the "compressed" string
would not become smaller than the original string, your method should
return the original string. You can assume the string has only uppercase
and lowercase letters.

Input: 'aabcccccaaa'--> 'a2b1c5a3'
Input: 'pale' --> 'pale'
Input: 'waaaaall' --> 'w1a5l2'
*/

const assertTest = function(bool, descriptionOfBehavior) {
  if (bool) {
    console.log('Test passed');
  } else {
    console.log('Failed: ', descriptionOfBehavior);
  }
}

const stringCompression = function(str) {
  let compressedStr = '';
  for (let ii = 0; ii < str.length; ii++) {
    const char = str[ii];
    const cache = {};
    cache[char] = 0;
    let temp = char;
    while (temp === char) {
      cache[str[ii]]++;
      ii++;
      temp = str[ii];
    }
    ii--;
    compressedStr += `${str[ii]}${cache[str[ii]]}`;
  }
  return compressedStr.length < str.length ? compressedStr : str;
}

assertTest(stringCompression('aabcccccaaa') === 'a2b1c5a3', 'returns compressed string');
assertTest(stringCompression('pale') === 'pale', 'returns string for longer compression');
assertTest(stringCompression('ppdd') === 'ppdd', 'returns string for same length compression');
assertTest(stringCompression('Wwwww') === 'W1w4', 'returns compression for different casing');
