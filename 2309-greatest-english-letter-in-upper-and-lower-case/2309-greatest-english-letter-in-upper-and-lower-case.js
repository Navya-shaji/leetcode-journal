/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
    let a = []
    for (let i = 0; i < s.length; i++) {
        let value = s[i].toLowerCase()
        let value2 = s[i].toUpperCase()
        if (s.includes(value) && s.includes(value2)) {
            a.push(value2)
        }
    }
    return a.length ? a.sort().pop() : ""
};