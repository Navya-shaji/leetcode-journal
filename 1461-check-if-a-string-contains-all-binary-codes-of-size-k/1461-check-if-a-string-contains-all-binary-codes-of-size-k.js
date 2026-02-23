/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
    let res = new Set()
    for (let i = 0; i <= s.length - k; i++) {
        res.add(s.slice(i, i + k))
    }
    return res.size == 2 ** k
};