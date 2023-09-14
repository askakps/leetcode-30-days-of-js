var expect = function(val) {
    return {
        toBe: (x) => {
            if (x === val) return x === val
            throw new Error('Not Equal')
        },
        notToBe: (x) => {
            if (x !== val) return true
            throw new Error('Equal')
        },
    }
};