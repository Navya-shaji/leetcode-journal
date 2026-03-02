/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    function FirstIndex(nums, target, left = 0, right = nums.length - 1) {
        if (left > right) return -1
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] == target) {
            let res = FirstIndex(nums, target, left, mid - 1);
            return res !== -1 ? res : mid;
        }
        if (nums[mid] > target) return FirstIndex(nums, target, left, mid - 1)
        else return FirstIndex(nums, target, mid + 1, right)
    }
    function LastIndex(nums, target, left = 0, right = nums.length - 1) {
        if (left > right) return -1
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] == target) {
            let res = LastIndex(nums, target, mid + 1, right);
            return res !== -1 ? res : mid;
        } if (nums[mid] > target) return LastIndex(nums, target, left, mid - 1)
        else return LastIndex(nums, target, mid + 1, right)
    }
    return [FirstIndex(nums, target), LastIndex(nums, target)]
};