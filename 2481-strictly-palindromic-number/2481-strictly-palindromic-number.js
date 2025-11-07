/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
    let count = 1
    for (let i = 2; i <= n - 2; i++) {
        let pal = n.toString(i)
        let reverse = pal.split("").reverse().join("")
        if (pal !== reverse) {
            return false
        }
    }
    return true
};