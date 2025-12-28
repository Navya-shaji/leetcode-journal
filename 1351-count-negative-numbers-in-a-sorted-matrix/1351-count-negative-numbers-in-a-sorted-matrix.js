/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    let a = grid.flat()
    let count = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            count++
        }
    }
    return count

};