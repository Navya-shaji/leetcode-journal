/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let result = [...new Set(nums)]
    return result.length == 1 ? 0 : 1
};