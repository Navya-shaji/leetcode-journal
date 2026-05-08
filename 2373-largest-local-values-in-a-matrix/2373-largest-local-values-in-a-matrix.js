/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
    let res = []
    for (let i = 0; i < grid.length - 2; i++) {
        let arr = []
        for (let j = 0; j < grid.length - 2; j++) {
            let max = 0
            for (let a = i; a < i + 3; a++) {
                for (let b = j; b < j + 3; b++) {
                    max = Math.max(max, grid[a][b])
                }
            }
            arr.push(max)
        }
        res.push(arr)

    }
    return res
};