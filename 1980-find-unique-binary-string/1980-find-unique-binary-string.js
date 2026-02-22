/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
    let len = 2 ** nums.length
    for (let i = 0; i < len; i++) {
        let result = i.toString(2).padStart(nums[0].length, "0")
        if (!nums.includes(result)) {
            return result
        }
    }
};