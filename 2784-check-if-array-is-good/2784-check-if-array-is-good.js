/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
    let max = Math.max(...nums)
    let count1 = 0
    let count = 0
    nums.sort((a, b) => a - b)
    for (let i = 1; i < max; i++) {
        if (nums[i] - nums[i - 1] != 1) {
            return false
        }
    }
   
    for (let item of nums) {
        if (item == max) {
            count++
        }
    }

    return count == 2
};