/**
 * @param {string} s
 * @return {string}
 */
var processStr = function (s) {
    let result = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "#") {
            result += result
        } else if (s[i] == "%") {
            result = result.split("").reverse().join("")
        } else if (s[i] == "*") {
            result = result.slice(0, -1);
        } else {
            result += s[i]
        }
    }
    return result
};