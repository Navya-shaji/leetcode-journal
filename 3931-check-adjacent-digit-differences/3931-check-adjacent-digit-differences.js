/**
 * @param {string} s
 * @return {boolean}
 */
var isAdjacentDiffAtMostTwo = function (s) {
    for (let i = 1; i <= s.length; i++) {
        if (Math.abs(s[i] - s[i - 1]) > 2) {
            return false
        }
    }
    return true
};