/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
    nums.sort((a, b) => a - b)
    let sum = Infinity
    for (let i = 0; i + k - 1 < nums.length; i++) {
        sum = Math.min(sum, nums[i + k - 1] - nums[i])
    }
    return sum
};