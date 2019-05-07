/*
Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.



Example 1:

Input: ["bella","label","roller"]
Output: ["e","l","l"]

Example 2:

Input: ["cool","lock","cook"]
Output: ["c","o"]



Note:

    1 <= A.length <= 100
    1 <= A[i].length <= 100
    A[i][j] is a lowercase letter

*/

const lettersToCharacterObject = (str) => {
	const result = {};

  for (let ii = 0; ii < str.length; ii++) {
  	result[str[ii]] = (result[str[ii]] + 1) || 1;
  }

  return result;
}

const commonChars = (arr) => {
	const result = [];
	const objectsArray = [];
  for (let ii = 0; ii < arr.length; ii++) {
  	objectsArray.push(lettersToCharacterObject(arr[ii]));
  }
  let chosenWordObject = objectsArray[0];
  for (let prop in chosenWordObject) {
  	let currentLetterCount = chosenWordObject[prop];
  	let allWordsHaveChosenLetter = true;
    let letterCounts = [];
    for (let jj = 1; jj < objectsArray.length; jj++) {
      if (objectsArray[jj][prop] && objectsArray[jj][prop] > 0) {
        letterCounts.push(objectsArray[jj][prop])
      } else {
        allWordsHaveChosenLetter = false;
        break;
      }
    }

    if (allWordsHaveChosenLetter) {
    	for (let ii = 0; ii < Math.min(...letterCounts, currentLetterCount); ii++) {
      	result.push(prop);
      }
    }

  }
  return result;
}
