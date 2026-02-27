/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
    let m = mat.length
    let n = mat[0].length
    function sorting(row, col) {
        let i = row
        let j = col
        let temp = []
        while (i < m && j < n) {
            temp.push(mat[i][j])
            i++
            j++
        }
        temp.sort((a, b) => a - b)
        i = row
        j = col
        let k = 0
        while (i < m && j < n) {
            mat[i][j] = temp[k++]
            i++
            j++
        }

    }
    for (let col = 0; col < n; col++) {
        sorting(0, col)
    }
    for (let row = 0; row < m; row++) {
        sorting(row, 0)
    }
    return mat
};