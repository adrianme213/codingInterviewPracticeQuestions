/*
Given a string, write a function to check if it is
a permutation of a palindrome. A palindrome is a word
or phrase that is the same forwards and backwards. A
permutation is a rearrangement of letters. The palindrome
does not need to be limited to just dictionary words.

Input: 'Tact Coa'
Output: True (permutations: "taco cat", "atco cta", etc.)
*/

const assertTest = function(bool, descriptionOfBehavior) {
  if (bool) {
    console.log('Test passed');
  } else {
    console.log('Failed: ', descriptionOfBehavior);
  }
}

const palindromePermutation = function(str) {
  const allLowerNoSpace = str.toLowerCase().replace(/\s/g, '');
  let daObj = {};
  for (let ii = 0; ii < allLowerNoSpace.length; ii++) {
    daObj[allLowerNoSpace[ii]] = (daObj[allLowerNoSpace[ii]]+1) || 1;
  }
  // Edge Case
  if (allLowerNoSpace.length <= 1) {
    return false;
  // Even Length String
  } else if (allLowerNoSpace.length % 2 === 0) {
    for (let prop in daObj) {
      if (daObj[prop] % 2 !== 0) {
        return false
      }
    }
  // Odd Length String
  } else {
    let oneTrueAllowed = true;
    for (let prop in daObj) {
      if (daObj[prop] % 2 !== 0 && oneTrueAllowed) {
        oneTrueAllowed = false;
      } else if (daObj[prop] % 2 !== 0) {
        return false;
      }
    }
  }
  return true;
}

assertTest(palindromePermutation('Tact Coa') === true, 'returns true for a permutation');
assertTest(palindromePermutation('Pages Man') === false, 'returns false for non-palindrome');
assertTest(palindromePermutation('Hnnaha') === true, 'returns true for even palindrome');
assertTest(palindromePermutation('asd') === false, 'returns false for short non-palindrome');
assertTest(palindromePermutation('a') === false, 'returns false for one letter');
