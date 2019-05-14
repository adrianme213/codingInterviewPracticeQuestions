// Multiple Pointers
function isSubsequence(str1, str2) {
  let p1 = 0;

  for (let ii = 0; ii < str2.length; ii++) {
      if (str1[p1] === str2[ii]) {
          p1 += 1;
      }
      if (p1 === str1.length) {
          return true;
      }
  }

  return false;
}
