/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function (n) {
    n = n + ""
    let sum = ""
    let val = 0
    for (let item of n) {
        if (item !== "0") {
            sum += item
        }
        val += Number(item)
    }
    return Number(sum) * val

};