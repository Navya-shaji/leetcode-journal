/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
    if (n <= 0) return false
    let val = [2, 3, 5]

    for (let i of val) {
        while (n % i === 0) {
            n = n / i;
        }
    }

    return n === 1
};