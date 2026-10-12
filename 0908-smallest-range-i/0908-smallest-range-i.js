/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
    let max = Math.max(...nums)
    let min = Math.min(...nums)
    return Math.max(0, max - min - 2 * k);
};