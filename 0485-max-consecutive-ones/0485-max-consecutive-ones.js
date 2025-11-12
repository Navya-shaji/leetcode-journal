/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let count = 0
    let b = 0
    for (num of nums) {
        if (num == 1) {
            count++
            b = Math.max(count, b)
        }
        else {
            count = 0
        }
    }
    return b
};