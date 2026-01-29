/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
    nums.sort((a, b) => a - b)
    let result = []
    let sum = 0
    while (nums.length > 0) {
        sum += nums[0] + nums[nums.length - 1]
        result.push(sum)
        sum = 0
        nums.pop()
        nums.shift()
    }
    return Math.max(...result)
};