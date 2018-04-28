/*
given two strings, write a method to determine if one string is a permutation of the other
*/

const assertTest = function(bool, descriptionOfBehavior) {
  if (bool) {
    console.log('Test passed');
  } else {
    console.log('Failed: ', descriptionOfBehavior);
  }
}

const checkPermutationsUno = function(str1, str2) {
  if (str1.length !== str2.length) { return false; }
  const arr1 = str1.split('');
  const arr2 = str2.split('');
  for (let ii = 0; ii < str1.length; ii++) {
    const index = arr2.indexOf(str1[ii]);
    if (index < 0) {
      return false
    }
    arr2.splice(index, 1);
  }
  return true
}

assertTest(checkPermutationsUno('abcdefg', 'adefgbc') === true, 'returns true for unique chars');
assertTest(checkPermutationsUno('abcabc', 'xyz') === false, 'returns false for non-unique chars');
assertTest(checkPermutationsUno('aAdb', 'badA') === true, 'returns false for unique chars, regardless of casing');

const checkPermutationsDos = function(str1, str2) {
  if (str1.length !== str2.length) { return false; }
  const obj1 = {};
  const obj2 = {};
  for (let ii = 0; ii < str1.length; ii++) {
    obj1[str1[ii]] = obj1[str1[ii]]++ || 1;
    obj2[str2[ii]] = obj2[str2[ii]]++ || 1;
  }
  for (let prop in obj1) {
    if (obj1[prop] !== obj2[prop]) { return false; }
  }
  return true
}

assertTest(checkPermutationsDos('abcdefg', 'adefgbc') === true, 'returns true for unique chars');
assertTest(checkPermutationsDos('abcabc', 'xyz') === false, 'returns false for non-unique chars');
assertTest(checkPermutationsDos('aAdb', 'badA') === true, 'returns false for unique chars, regardless of casing');
