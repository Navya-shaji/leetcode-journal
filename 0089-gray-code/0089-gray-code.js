/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    let array = []
    for (let i = 0; i < 2 ** n; i++) {
        let gray = i ^ (i >> 1)
        array.push(gray.toString(2).padStart(n, "0"))
    }
    let result = []
    for (let i = 0; i < array.length; i++) {
        result.push(parseInt(array[i], 2))
    }
    return result
};