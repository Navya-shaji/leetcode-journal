/**
 * @param {string} s
 * @param {character} x
 * @param {character} y
 * @return {string}
 */
var rearrangeString = function (s, x, y) {
    let str1 = ""
    let str2 = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i] == x) {
            str2 += s[i]
        } else {
            str1 += s[i]
        }
    }
    return str1 + str2
};