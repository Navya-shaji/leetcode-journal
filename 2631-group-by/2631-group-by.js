/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    return this.reduce((acc, item) => {
        let val = fn(item);
        if (acc[val]) {
            acc[val].push(item);
        } else {
            let arr = [];
            arr.push(item);
            acc[val] = arr;
        }
        return acc;
    }, {});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */