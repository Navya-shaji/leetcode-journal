/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let value1 = s.split("").map((item) => s.indexOf(item))
    let value2 = t.split("").map((item) => t.indexOf(item))
    return JSON.stringify(value1) === JSON.stringify(value2)
};