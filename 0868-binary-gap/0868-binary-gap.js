/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
    let binary = n.toString(2)
    let array = []
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] == "1") {
            array.push(i)
        }
    }
    let max = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] - array[i - 1] > max) {
            max = array[i] - array[i - 1]
            console.log(max)
        }
    }
    return max
};