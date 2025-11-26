/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function (s) {
    let result = s.split("").filter((item, index) => s.indexOf(item) == index)
    return result.length
};