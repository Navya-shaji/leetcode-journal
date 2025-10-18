/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
    let value = n.toString(k)
    let sum = 0
    for (let i = 0; i < value.length; i++) {
        sum += Number(value[i])
    }
    return sum
};