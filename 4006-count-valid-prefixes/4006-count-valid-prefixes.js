/**
 * @param {string} s
 * @return {number}
 */
var countValidPrefixes = function (s) {
    let check = [0, 0]
    let res = 0
    for (let item of s) {
        if (item === "0") check[0]++
        else if (item == "1") check[1]++
        if (Math.abs(check[0] - check[1]) <= 1) res++
    }
    return res
};