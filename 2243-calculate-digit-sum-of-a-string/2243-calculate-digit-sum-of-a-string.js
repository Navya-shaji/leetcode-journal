/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
    if (s.length <= k) return s
    let res = ""
    for (let i = 0; i < s.length; i += k) {
        let val = s.slice(i, i + k).split("").reduce((acc, item) => acc += Number(item), 0)
        res += val
    }
    return digitSum(res, k)
};