/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
    let res = []
    let str = ""
    let count = 0
    for (let i = 0; i < s.length; i++) {
        str += s[i]
        for (let j = i; j <= s.length; j++) {
            if (str.length == k) {
                res.push(str)
                str = ""
            }
        }

    }
    if (!res.includes(str)) {
        for (let j = 1; j < k; j++) {
            str += fill
            if (str.length == k) {
                res.push(str)
            }
        }

    }
    return res
};