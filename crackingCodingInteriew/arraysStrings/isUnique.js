/*
Determine if a string has all unique characters.
Try without using additional data structures.
*/

const assertTest = function(bool, descriptionOfBehavior) {
  if (bool) {
    console.log('Test passed');
  } else {
    console.log('Failed: ', descriptionOfBehavior);
  }
}

const isUnique = function(str) {
  const obj = {};
  for (let ii = 0; ii < str.length; ii++) {
    if (obj[str[ii]] === undefined) {
      obj[str[ii]] = true;
    } else {
      return false
    }
  }
  return true
}

assertTest(isUnique('abcdefg') === true, 'returns true for unique chars');
assertTest(isUnique('abcabc') === false, 'returns false for non-unique chars');
assertTest(isUnique('aAdb') === true, 'returns false for unique chars, regardless of casing');
