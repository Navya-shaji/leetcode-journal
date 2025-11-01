/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
    let str = num.toString()
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (num % Number(str[i]) == 0) {
            count++
        }
    }
    return count
};