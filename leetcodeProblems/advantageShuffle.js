/*Given two arrays A and B of equal size, the advantage of A with respect to B is the number of indices i for which A[i] > B[i].

Return any permutation of A that maximizes its advantage with respect to B.

Example 1:

Input: A = [2,7,11,15], B = [1,10,4,11]
Output: [2,11,7,15]

Example 2:

Input: A = [12,24,8,32], B = [13,25,32,11]
Output: [24,32,8,12]
*/

 var advantageCount = function(A, B) {
    let result = [];
    let arrayAcopy = A.slice().sort((a, b) => a - b);

    for (let ii = 0; ii < B.length; ii++) {
        let numB = B[ii];
        for (let jj = 0; jj < arrayAcopy.length; jj++) {
            if (arrayAcopy[jj] > numB) {
            result.push(arrayAcopy.splice(jj, 1));
            break;
          }
        }
        if (result.length < ii+1) {
        	result.push(arrayAcopy.splice(0, 1));
        }
    }
    result = [...result, ...arrayAcopy];

    return result;

};
