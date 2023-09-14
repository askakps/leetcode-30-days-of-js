var addTwoPromises = async function(promise1, promise2) {
    return promise1.then((res) => promise2.then((res2) => res + res2))
};