firstNonConsecutive([1, 2, 4]);

function firstNonConsecutive(arr) {
    var first = null;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i + 1] - arr[i] !== 1) {
            first = arr[i + 1];
            return first;
        }
    }
    if (first === null) {
        return first;
    }

}