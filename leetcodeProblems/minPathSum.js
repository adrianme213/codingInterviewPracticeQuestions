var minPathSum = function(grid) {
    var mySolution = [];
    // initialize array
    for (let ii = 0; ii < grid.length; ii++) {
    	mySolution.push([]);
    }

    // initialize first row
    mySolution[0][0] = grid[0][0];
    for (let ii = 1; ii < grid[0].length; ii++) {
    	// top row
    	mySolution[0][ii] = mySolution[0][ii-1] + grid[0][ii];
    }
    for (let ii = 1; ii < grid.length; ii++) {
        // left column
        mySolution[ii][0] = mySolution[ii-1][0] + grid[ii][0];
    }

    // start at grid[1][1] and add top or left minimum value until reach the end.
    for (let ii = 1; ii < grid[0].length; ii++) {
        for (let jj = 1; jj < grid.length; jj++) {
            var theMinOfTwo = Math.min(mySolution[jj-1][ii], mySolution[jj][ii-1]);
            mySolution[jj][ii] = theMinOfTwo + grid[jj][ii];
        }
    }

    return mySolution[grid.length-1][grid[0].length-1];
};
