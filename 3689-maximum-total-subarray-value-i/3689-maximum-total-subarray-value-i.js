/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function (nums, k) {
    let min = Math.min(...nums)
    let max = Math.max(...nums)
    return k * (max - min)
};