/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function (num1, num2) {
    let count = 0
    while (num1 !== 0 && num2 !== 0) {
        if (num1 > num2) {
            let val = num1 - num2
            num1 = val
            count++
        } else {
            val = num2 - num1
            num2 = val
            count++
        }
    }
    return count
};