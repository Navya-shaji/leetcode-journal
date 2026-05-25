/**
 * @param {number[]} nums
 * @param {number} digit
 * @return {number}
 */
var countDigitOccurrences = function (nums, digit) {
    let count = 0
    let value = digit.toString()
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i] + ""
        for (let j = 0; j < val.length; j++) {
            if (val[j] == value) {
                count++
            }
        }
    }
    return count
};