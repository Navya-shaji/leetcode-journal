/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
    let total = arr.reduce((acc, curr) => acc += curr, 0)
    let avg = total / 3
    let sum = 0
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (sum == avg) {
            count++
            sum = 0
        }
    }
    return count >= 3
};