/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {

    let sum2 = 0
    let count = 0
    for (let i = 1; i < nums.length; i++) {
        let sum1 = nums.slice(i).reduce((acc, item) => acc += item, 0)
        sum2 += nums[i - 1]
        if (Math.abs(sum1 - sum2) % 2 == 0) {
            count++
        }
    }
    return count
};