const sub = (arr, i) => {
    const result = [];
    for (var x = 0; x<i; x++) result.push(arr[x]);
    for (var x = i + 1, il = arr.length; x<il; x++) result.push(arr[x]);
    return result;
}

//const rise = arr => arr.slice(1).every( (e, i, a) => e > arr[i] );

const riseFast = arr => {
    for (var x = 1, il = arr.length; x<il; x++) {
        if (arr[x] <= arr[x-1]) return false;
    }
    return true;
}

const almostIncreasingSequence = s => s.some( (el, i, ar) => riseFast( sub(s, i) ) );