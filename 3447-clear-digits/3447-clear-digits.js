/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", '9']
    let arr = []
    for (let i = 0; i < s.length; i++) {
        if (num.includes(s[i])) {
            arr.pop()
        } else {
            arr.push(s[i])
        }
    }
    return arr.join("")
};