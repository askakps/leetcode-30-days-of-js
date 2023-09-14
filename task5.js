var map = function(arr, fn) {
    const newArr = []
    arr.forEach((item, index) => newArr.push(fn(item, index)))
    return newArr
};