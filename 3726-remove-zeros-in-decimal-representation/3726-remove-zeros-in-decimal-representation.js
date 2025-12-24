/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function (n) {
    let val = n.toString()
    let res = ""
    for (let i = 0; i < val.length; i++) {
        if (val[i] !== "0") {
            res += val[i]
        }
    }
    return parseInt(res)
};