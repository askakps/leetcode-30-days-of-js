var isEmpty = function(obj) {
    return Array.isArray(obj) ? obj.length === 0 : Object.values(obj).length === 0
};