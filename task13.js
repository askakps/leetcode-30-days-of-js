var cancellable = function(fn, args, t) {
    let canceled = false;

    const cancel = () => {
        canceled = true;
    };

    const execute = () => {
        if (!canceled) {
        fn(...args);
        }
    };

    setTimeout(execute, t);

    return cancel;
};