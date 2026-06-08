/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    let left = []
    let right = []
    let mid = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            left.push(nums[i])
        } else if (nums[i] == pivot) {
            mid.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }
    return [...left, ...mid, ...right]
};