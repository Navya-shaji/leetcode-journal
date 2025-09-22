/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
    let freq = nums.reduce((acc, item) => {
        if (acc[item]) {
            acc[item]++
        } else {
            acc[item] = 1
        }
        return acc
    }, {})
    let arr = Object.values(freq).sort((a, b) => b - a)
    let sum = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[0] == arr[i]) {
            sum += arr[i]
        }

    }
    return sum
};