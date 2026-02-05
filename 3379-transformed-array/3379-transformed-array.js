/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function (nums) {
    let n = nums.length
    let result = []
    for (let i = 0; i < n; i++) {
        let index = ((i + nums[i]) % n + n) % n
        result.push(nums[index])
    }
    return result
};