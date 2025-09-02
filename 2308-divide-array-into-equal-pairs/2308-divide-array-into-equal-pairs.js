/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    let sort = nums.sort((a, b) => a - b)
    for (let i = 0; i < sort.length; i += 2) {
        if (sort[i] !== sort[i + 1]) {
            return false
        }
    }
    return true
};