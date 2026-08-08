/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function (nums, k) {
    nums.sort((a, b) => a - b)
    let res = 1
    let min = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] - min > k) {
            res++
            min = nums[i]
        }
    }
    return res
};