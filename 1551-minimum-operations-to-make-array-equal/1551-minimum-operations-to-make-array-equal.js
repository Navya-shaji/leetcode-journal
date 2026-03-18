/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push((2 * i) + 1)
    }
    let sum = arr.reduce((acc, item) => acc += item, 0)
    let target = (sum / n)
    let count = 0
    for (let i = 0; i < Math.floor(n / 2); i++) {
        count += (target - arr[i])
    }
    return count
};