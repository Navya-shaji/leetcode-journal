/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function (n) {
    let x = 1;
    while (x < n) {
        x = x * 2 + 1;
    }
    return x;
};