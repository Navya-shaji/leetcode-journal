/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        let rem = nums[i] % 3
        if (rem !== 0) {
            count++
        }
    }
    return count
};