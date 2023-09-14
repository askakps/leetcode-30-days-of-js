var once = function(fn) {
    let executed = false
    return function(...args){
        if (!executed) {
            executed = true
            return res = fn(...args)
        }
    }   
    
};