/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
    let arr = []
    a = Math.floor(n / 2)
    for (i = 1; i <= a; i++) {
        arr.push(i, -i);
    }
    if (n % 2 === 1) {
        arr.push(0);
    }
    return arr
};