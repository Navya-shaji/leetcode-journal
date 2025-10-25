/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
    let res = ""
    for (let i = 1; i <= n; i++) {
        if (n % 2 !== 0) {
            res += "a"
        } else {
            if (res.length == n - 1) {
                res += "b"
            } else {
                res += "a"
            }
        }
    }
    return res
};