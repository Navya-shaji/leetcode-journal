/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function (matrix) {
    let result = []
    for (let i = 0; i < matrix.length; i++) {
        let val = matrix[i].reduce((acc, item) => acc + item, 0)
        result.push(val)
    }
    return result
};