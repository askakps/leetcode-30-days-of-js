var reduce = function(nums, fn, init) {
    nums.forEach((num) => init = fn(init, num))
    return init
};