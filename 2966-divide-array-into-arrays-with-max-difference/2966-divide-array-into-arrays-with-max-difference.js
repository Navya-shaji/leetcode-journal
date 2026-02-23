/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {
    nums.sort((a, b) => a - b)
    let res = []
    let arr = []
    let count = 0
    let count2 = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i], nums[i + 1], nums[i
            + 2]) {

            res.push([nums[i], nums[i + 1], nums[i
                + 2]])
        }
    }

    for (let i = 0; i < res.length; i += 3) {
        if (res[i][2] - res[i][0] > k) {
            return []
        } else {
            arr.push(res[i])
        }
    }
    return arr
};