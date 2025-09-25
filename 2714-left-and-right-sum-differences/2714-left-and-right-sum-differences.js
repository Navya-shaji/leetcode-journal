/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
    let left = []
    let right = []
    let res = []
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        left.push(sum)
        sum += nums[i]
    }
    let length = nums.length
    for (let i = 0; i < length; i++) {
        let val = nums.slice(1)
        right.push(val.reduce((acc, item) => acc += item, 0))
        nums = val
    }
    for (let i = 0; i < left.length; i++) {
        res.push(Math.abs(left[i] - right[i]))
    }
    return res
};