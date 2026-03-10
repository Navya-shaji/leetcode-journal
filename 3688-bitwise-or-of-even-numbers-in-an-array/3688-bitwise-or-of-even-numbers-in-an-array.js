/**
 * @param {number[]} nums
 * @return {number}
 */
var evenNumberBitwiseORs = function (nums) {
    let res = 0
    for (let i of nums) {
        if ((i & 1) === 0) {
            res = res | i
        }
    }
    return res
};