/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let res = parseInt(s) || 0
    if (res <= -(2 ** 31)) return -(2 ** 31)
    else if (res >= (2 ** 31)) return (2 ** 31) - 1
    return res
};