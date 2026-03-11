/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let num1 = new Set(nums)
    let sum1 = Array.from(num1).reduce((acc, item) => acc += item, 0)
    let sum2 = nums.reduce((acc, item) => acc += item, 0)
    return ((3 * sum1) - sum2) / 2
};