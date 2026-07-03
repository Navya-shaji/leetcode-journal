/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let sum = 0
    let count = 0
    for (let i = 0; i < n; i++) {
        count++
        sum += count
        if (sum > n) return i
    }
    return count
};

