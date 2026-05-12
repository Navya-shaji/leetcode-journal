/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let sum1 = 0
    let sum2 = 0
    let total = nums.reduce((acc, item) => acc += item, 0)
    for (let i = 0; i < nums.length; i++) {
        let sum2 = total - sum1 - nums[i]
        if (sum2 == sum1) {
            return i
        }
        sum1 += nums[i]

    }
    return -1
};