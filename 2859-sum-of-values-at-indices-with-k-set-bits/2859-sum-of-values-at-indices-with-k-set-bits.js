/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        let binary = i.toString(2)
        let count = 0
        for (let j = 0; j < binary.length; j++) {
            if (binary[j] == "1") {
                count++
            }
        }
        if (count == k) {
            sum += nums[i]
        }

    }
    return sum
};