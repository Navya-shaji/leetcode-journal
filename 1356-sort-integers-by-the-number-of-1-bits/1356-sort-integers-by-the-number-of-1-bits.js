/**
 * @param {number[]} arr
 * @return {number[]}
 */
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
    return arr.sort((a, b) => {
        const arrA = a.toString(2).split('').filter(item => item === "1").length
        const arrB = b.toString(2).split('').filter(item => item === "1").length
        return arrA - arrB || a - b
    })
};