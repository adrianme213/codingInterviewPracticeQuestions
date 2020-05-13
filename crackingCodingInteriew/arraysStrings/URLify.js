/*
Write a method to replace all spaces in a string with
'%20'. You may assume that the string has sufficient
space at the end to hold the addtional characters,
and that you are given the "true" length of the string.
*/

const assertTest = function(bool, descriptionOfBehavior) {
  if (bool) {
    console.log('Test passed');
  } else {
    console.log('Failed: ', descriptionOfBehavior);
  }
}

const URLify = function(str, daLength) {
  const trimmed = str.split('');
  while (trimmed[trimmed.length - 1] === ' ') {
    trimmed.pop();
  }
  return trimmed.join('').replace(/\s/g, '%20');
}

assertTest(URLify('Mr John Smith          ', 13) === 'Mr%20John%20Smith', 'returns correct url with caps');
assertTest(URLify('pages and food   ', 14) === 'pages%20and%20food', 'returns correct url');
