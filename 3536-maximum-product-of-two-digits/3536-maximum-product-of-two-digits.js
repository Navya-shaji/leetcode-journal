/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function (n) {
    let a = n.toString().split("")
    let b = a.sort((a, b) => b - a)
    return Number(b[0] * b[1])
};