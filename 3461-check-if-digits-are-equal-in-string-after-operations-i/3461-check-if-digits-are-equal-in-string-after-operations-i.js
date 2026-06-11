/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function (s) {
    while (s.length > 2) {
        let value = ""
        for (let i = 0; i < s.length - 1; i++) {
            const res = (Number(s[i]) + Number(s[i + 1])) % 10
            value += res
        }
        s = value
    }
    return s[0] === s[1]
};