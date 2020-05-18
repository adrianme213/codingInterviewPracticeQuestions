// Multiple Pointers
function averagePair(arr, avg){
    if (arr.length < 2) {
        return false;
    }
    let p1 = 0;
    let p2 = arr.length - 1;

    while (p1 < p2) {
        const currentAvg = (arr[p1] + arr[p2])/2;
        if (currentAvg === avg) {
            return true;
        } else if ((Math.abs(avg - arr[p1])) < (Math.abs(arr[p2] - avg))) {
            p2 -= 1;
        } else {
            p1 += 1;
        }
    }

    return false;
}
