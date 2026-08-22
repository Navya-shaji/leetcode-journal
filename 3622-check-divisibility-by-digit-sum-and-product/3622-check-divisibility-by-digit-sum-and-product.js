/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function (n) {
    let res = n + ""
    let sum = 0
    let mul = 1
    for (let i = 0; i < res.length; i++) {
        sum += Number(res[i])
        mul *= Number(res[i])
    }
    return n % (sum + mul) == 0
};