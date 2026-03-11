/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
    let value = n.toString(2).split("")
    for (let i = 0; i < value.length; i++) {
        if (value[i] == "0") {
            value[i] = "1"
        } else {
            value[i] = "0"
        }
    }
    let result = value.join("")
    return parseInt(result, 2)
};