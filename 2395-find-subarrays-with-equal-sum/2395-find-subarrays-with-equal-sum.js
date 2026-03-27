/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
    let res = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums.slice(i, j + 1).length == 2) {
                res.push(nums.slice(i, j + 1))
            }
        }
    }
    let result = []
    for (let i = 0; i < res.length; i++) {
        let sum = res[i].reduce((acc, item) => acc + item, 0)
        if (result.includes(sum)) return true
        result.push(sum)
    }

    return false

};