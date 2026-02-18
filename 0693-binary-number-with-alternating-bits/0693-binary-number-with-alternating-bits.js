/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    let bits = n.toString(2)
    let array = bits.split("")
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[i + 1]) {
            count++
        }
    }
    return array.length == count
};