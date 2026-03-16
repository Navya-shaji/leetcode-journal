/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function (k) {
    if (k % 2 === 0 || k % 5 === 0) return -1;
    let count = 0
    for (let i = 1; i <= k; i++) {
        count = (count * 10 + 1) % k
        if (count === 0) return i
    }
    return -1

};