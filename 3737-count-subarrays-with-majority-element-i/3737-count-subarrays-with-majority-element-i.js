/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function (nums, target) {
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        let count = 0
        for (let j = i; j < nums.length; j++) {
            nums[j] == target ? count++ : count--
            if (count > 0) res++
        }
    }
    return res
};