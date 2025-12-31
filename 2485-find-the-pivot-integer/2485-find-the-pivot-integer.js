/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
    let sum = 0
    let totalSum = (n * (n + 1)) / 2
    for (let i = 1; i <= n; i++) {
        sum += i
        if (sum == totalSum - sum + i) {
            return i
        }
    }
    return -1
};