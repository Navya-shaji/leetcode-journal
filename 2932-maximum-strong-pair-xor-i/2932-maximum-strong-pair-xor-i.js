/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function (nums) {
    let ans = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            let a = nums[i]
            let b = nums[j]
            if (Math.abs(a - b) <= Math.min(a, b)) {
                ans = Math.max(ans, a ^ b)
            }
        }
    }
    return ans
};