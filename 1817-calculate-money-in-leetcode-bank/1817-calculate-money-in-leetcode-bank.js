/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let sum = 0;
    let count = 1
    let val = 1
    for (let i = 1; i <= n; i++) {
        sum += val
        val++
        if (i % 7 == 0) {
            count++
            val = count
        }
    }
    return sum
};