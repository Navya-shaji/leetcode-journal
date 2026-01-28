/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    let A = []
    let B = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            A.push(nums[i])
        } else {
            B.push(nums[i])
        }
    }
    let result = []
    for (let i = 0; i < A.length; i++) {
        result.push(A[i], B[i])
    }
    return result
};