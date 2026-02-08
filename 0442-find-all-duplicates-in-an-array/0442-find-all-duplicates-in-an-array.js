/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    let res = []
    let freq = nums.reduce((acc, item) => {
        if (acc[item]) {
            acc[item]++
        } else {
            acc[item] = 1
        }
        return acc
    }, {})
    for (let item in freq) {
        if (freq[item] >= 2) {
            res.push(Number(item))
        }
    }
    return res
};