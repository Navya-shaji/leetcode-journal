/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let obj = new Set(nums)
    for (let i = 1; i <= nums.length; i++) {
        if (!obj.has(i)) return i
    }
    return nums.length + 1;
};