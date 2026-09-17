/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    let a=target.sort()
    let b=arr.sort()
    return JSON.stringify(a)===JSON.stringify(b)
};