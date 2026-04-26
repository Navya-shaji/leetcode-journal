/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
    let str = ""
    let val = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== "i") {
            str += s[i]
        } else {
            val += s[i]
            str = str.split("").reverse().join("")
            continue
        }
    }
    return str
};