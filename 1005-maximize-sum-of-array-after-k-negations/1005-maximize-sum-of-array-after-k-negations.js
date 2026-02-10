/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
    for (let i = 1; i <= k; i++) {
        nums.sort((a, b) => a - b)
        nums[0] = nums[0] * (-1)
    }
    return nums.reduce((acc, item) => acc += item, 0)
};