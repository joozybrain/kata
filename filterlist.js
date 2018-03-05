function filter_list(l) {
    var newArray = [];
    for (var i = 0; i < l.length; i++) {
        if (Number.isInteger(l[i])) {
            newArray.push(l[i]);
        }
    }

    return newArray;
}