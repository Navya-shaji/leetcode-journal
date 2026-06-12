/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    let max = Math.max(...nums)
    let total = 0
    for (let i = 0; i < nums.length; i++) {
        let diff = max - nums[i]
        total += diff
    }
    return total
};