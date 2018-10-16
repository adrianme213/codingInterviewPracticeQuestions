const tripleStep = (n, climbedTotal = 0, answer = 0) => {
  // Base case
  if (climbedTotal === n) {
    return answer + 1;
  } else if (climbedTotal > n) {
    return answer;
  }
  // -------------
  if (climbedTotal + 1 <= n) {
    answer += tripleStep(n, climbedTotal+1, answer);
  }
  if (climbedTotal + 2 <= n) {
    answer += tripleStep(n, climbedTotal+2, answer);
  }
  if (climbedTotal + 3 <= n) {
    answer += tripleStep(n, climbedTotal+3, answer);
  }
  return answer;
}

const assert = (bool, desc) => {
  if (!bool) {
    console.log('FAILED: ', desc);
  } else {
    console.log('Test Passed');
  }
}

assert(tripleStep(2) === 2, 'simple test for 2 steps');
assert(tripleStep(3) === 4, 'test for 3 steps');
assert(tripleStep(4) === 6, 'test for 4 steps');
