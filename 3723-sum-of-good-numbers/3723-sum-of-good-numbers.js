/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function (nums, k) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        if ((i - k < 0 || nums[i] > nums[i - k]) && (i + k >= nums.length || nums[i] > nums[i + k])) {
            sum += nums[i]
        }
    }
    return sum
};