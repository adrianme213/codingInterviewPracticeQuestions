/*
Write a JavaScript program to converts a comma-separated values (CSV) string to a 2D array.

*/

const assertArraysAreEqual = (result, expected) => {
  if (result.length !== expected.length) {
    return false;
  }

  for (let ii = 0; ii < result.length; ii++) {
    if (Array.isArray(result[ii]) && Array.isArray(expected[ii])) {
      if (!assertArraysAreEqual(result[ii], expected[ii])) {
        return false;
      }
    } else if (typeof(result[ii]) === typeof(expected[ii])) {
      if (result[ii] !== expected[ii]) {
        return false;
      }
    }
  }

  return true;
}

const convertCSVstringToArray = (str, delimeter = ',', omitFirstRow = false) => {
  return str
            .slice(omitFirstRow ? str.indexOf('\n') + 1: 0)
            .split('\n')
            .map(item => item.split(delimeter));
}


assertArraysAreEqual(convertCSVstringToArray('a,b\nc,d'), [['a', 'b',], ['c', 'd']]);
assertArraysAreEqual(convertCSVstringToArray('a;b\nc;d', ';'), [['a', 'b',], ['c', 'd']]);
assertArraysAreEqual(convertCSVstringToArray('head1,head2\na,b\nc,d', ',', true), [['a', 'b',], ['c', 'd']]);
