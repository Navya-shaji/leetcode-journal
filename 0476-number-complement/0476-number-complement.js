/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    let val = num.toString(2).split("")
    for (let i = 0; i < val.length; i++) {
        val[i] == "1" ? val[i] = "0" : val[i] = "1"
    }
    return parseInt(val.join(""), 2)
};