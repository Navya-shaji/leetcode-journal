/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    let arr = []
    for (let i = 0; i < matrix.length; i++) {
        let min = Math.min(...matrix[i])
        let index = matrix[i].indexOf(min)
        let res = matrix.map(item => item[index])
        let max = Math.max(...res)
        if (max == min) {
            arr.push(max)
            break
        }
    }
    return arr
};