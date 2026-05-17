/**
 * @param {string} s
 * @return {number}
 */
var firstMatchingIndex = function (s) {
    let n = s.length
    for (let i = 0; i < n / 2; i++) {
        if (s[i] == s[n - 1 - i]) {
            return i
        }
    }
    return -1
};