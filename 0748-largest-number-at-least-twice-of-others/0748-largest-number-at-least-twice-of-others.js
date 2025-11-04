/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    let a = Math.max(...nums)
    b = nums.indexOf(a)
    for (i = 0; i < nums.length; i++) {
        if ((nums[i] * 2) > a && i != b) {
            return -1
        }
    }
    return b
};