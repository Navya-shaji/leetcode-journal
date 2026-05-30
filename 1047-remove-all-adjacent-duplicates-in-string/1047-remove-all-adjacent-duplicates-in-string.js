/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let array = []
    for (let i = 0; i < s.length; i++) {
        if (array[array.length - 1] == s[i]) {
            array.pop()
        } else {
            array.push(s[i])
        }
    }
    return array.join("")
};