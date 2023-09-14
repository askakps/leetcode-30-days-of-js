var createCounter = function(init) {
    let number = init
    return {
        increment: function() { return ++number },
        decrement: function() { return --number },
        reset:  function() { number = init; return number }
    }
};