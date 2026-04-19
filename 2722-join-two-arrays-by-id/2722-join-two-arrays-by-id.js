/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    const res = {};
    for (let item of [...arr1, ...arr2]) {
        res[item.id] = { ...res[item.id], ...item };
    }
    return Object.values(res);
};