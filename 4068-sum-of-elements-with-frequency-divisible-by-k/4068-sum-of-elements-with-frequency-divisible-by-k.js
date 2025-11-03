/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function (nums, k) {
    let sum = 0
    let freq = nums.reduce((acc, item) => {
        if (acc[item]) {
            acc[item]++
        } else {
            acc[item] = 1
        }
        return acc
    }, {})

    for (i in freq) {
        if (freq[i] % k == 0) {
            sum += freq[i] * i
        }
    }
    return sum
};