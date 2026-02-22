/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = [[]]
    for (let i = 0; i < nums.length; i++) {
        let len = res.length
        for (let j = 0; j < len; j++) {
            res.push([...res[j], nums[i]])
        }
    }
    return res
};