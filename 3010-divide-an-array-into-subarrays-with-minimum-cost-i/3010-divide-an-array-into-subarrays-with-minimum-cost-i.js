/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function (nums) {
    let sum = nums[0]
    nums.shift()
    nums.sort((a, b) => a - b)
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        count++
        if (count == 2) break
    }
    return sum

};