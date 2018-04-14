/* There are three types of edits that can be performed on strings:
insert a character, remove a character, or replace a character.
Given two strings, write a function to check if they are one edit
(or zero edits) away.

Input: 'pale', 'ple' --> true
Input: 'pales', 'pale' --> true
Input: 'pale', 'bale' --> true
Input: 'pale', 'bake' --> true
*/

const assertTest = function(bool, descriptionOfBehavior) {
  if (bool) {
    console.log('Test passed');
  } else {
    console.log('Failed: ', descriptionOfBehavior);
  }
}

const oneAway = function(str1, str2) {
  // if strings have equal length, iterate through letters noting differences
  let bool = false;
  if (str1.length === str2.length) {
    for (let ii = 0; ii < str1.length; ii++) {
      if (bool && str1[ii] !== str2[ii]) {
        return false;
      } else if (str1[ii] !== str2[ii]) {
        bool = true;
      }
    }
  } else {
    let longerString = str1.length > str2.length ? str1 : str2;
    let shorterString = str1 === longerString ? str2: str1;
    let tracker = 0;
    let bool = false;
    for (let ii = 0; ii < longerString.length; ii++) {
      // compare lengths with a tracker
      if (bool && longerString[ii] !== shorterString[tracker]) {
        return false;
      } else if (longerString[ii] !== shorterString[tracker]) {
        bool = true;
        tracker -= 1;
      }
      tracker++;
    }
  }
  return true;
}

assertTest(oneAway('pale', 'ple') === true, 'returns true for one missing');
assertTest(oneAway('pales', 'pale') === true, 'returns true for one insert');
assertTest(oneAway('pale', 'bale') === true, 'returns true for one replace');
assertTest(oneAway('pale', 'bake') === false, 'returns false for more than 1 difference');
assertTest(oneAway('pale', 'pnf') === false, 'returns false for different length and difference');
assertTest(oneAway('pekingduck', 'donaldduck') === false, 'returns false for different length and difference');
