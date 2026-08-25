/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function (nums, k) {
    let val = k
    for (let i = 0; i <= nums.length; i++) {
        if (!nums.includes(val)) {
            return val
        } else {
            if (nums.length == 1) return val + val
            val += k
        }
    }

};