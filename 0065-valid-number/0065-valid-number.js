/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    let valid = /^[+-]?(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?$/
    let count = 0
    s = s.trim()
    return valid.test(s)
};