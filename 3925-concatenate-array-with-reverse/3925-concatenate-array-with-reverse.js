/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function (nums) {
    let res = []
    for (let i = 0; i < nums.length; i++) {
        res.push(nums[i])
    }
    let res2 = nums.reverse()
    return [...res, ...res2]

};