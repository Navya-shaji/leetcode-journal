/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        let smallest = nums[i], biggest = nums[i]
        for (let j = i; j < nums.length; j++) {
            smallest = Math.min(smallest, nums[j])
            biggest = Math.max(biggest, nums[j])
            res += biggest - smallest
        }
    }
    return res
};