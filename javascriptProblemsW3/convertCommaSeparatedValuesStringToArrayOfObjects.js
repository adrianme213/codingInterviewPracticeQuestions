/*
Write a JavaScript program to convert a comma-separated values (CSV) string to a 2D array of objects. The first row of the string is used as the title row.



console.log(CSV_to_JSON('col1,col2\na,b\nc,d'));
console.log(CSV_to_JSON('col1;col2\na;b\nc;d', ';'));

[{"col1":"a","col2":"b"},{"col1":"c","col2":"d"}]
[{"col1":"a","col2":"b"},{"col1":"c","col2":"d"}]
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

const convertCSVstringToArrayOfObjects = (str, delimeter = ',', omitFirstRow = false) => {
  return str
            .slice(omitFirstRow ? str.indexOf('\n') + 1: 0)
            .split('\n')
            .map(item => item.split(delimeter));
}


assertArraysAreEqual(convertCSVstringToArray('a,b\nc,d'), [['a', 'b',], ['c', 'd']]);
assertArraysAreEqual(convertCSVstringToArray('a;b\nc;d', ';'), [['a', 'b',], ['c', 'd']]);
assertArraysAreEqual(convertCSVstringToArray('head1,head2\na,b\nc,d', ',', true), [['a', 'b',], ['c', 'd']]);
