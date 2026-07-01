/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let res = ""
    for (let i = 0; i < s.length; i += k + k) {
        let a = s.slice(i, i + k).split("").reverse().join("")
        let b = s.slice(i + k, (k + k) + i)
        res += a + b
    }
    return res
};