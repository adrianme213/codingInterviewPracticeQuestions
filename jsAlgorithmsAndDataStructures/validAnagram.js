// Method to demonstrate Frequency Counters

function validAnagram(word1, word2){
    if (word1.length !== word2.length) {
        return false;
    }

  const count1 = {};
  const count2 = {};

  for (let ii = 0; ii < word1.length; ii++) {
      count1[word1[ii]] = (count1[word1[ii]] + 1) || 1;
  }
  for (let jj = 0; jj < word2.length; jj++) {
      count2[word2[jj]] = (count2[word2[jj]] + 1) || 1;
  }
  for (let prop in count1) {
      if (count1[prop] !== count2[prop]) {
          return false;
      }
  }

  return true;
}
