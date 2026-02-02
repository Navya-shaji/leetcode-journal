/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
    const array = s.split("|")
    let count = 0
    let result = ""
    for (let i = 0; i < array.length; i++) {
        if (i % 2 != 1) {
            result += array[i]
        }
    }
    for (let i = 0; i < result.length; i++) {
        if (result[i] == "*") {
            count++
        }
    }
    return count
};