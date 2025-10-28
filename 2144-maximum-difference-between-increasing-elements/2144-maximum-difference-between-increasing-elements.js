/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            if (nums[i] < nums[j]) {
                arr.push(nums[j] - nums[i])
            }
        }
    }
    return arr.length > 0 ? Math.max(...arr) : -1
};