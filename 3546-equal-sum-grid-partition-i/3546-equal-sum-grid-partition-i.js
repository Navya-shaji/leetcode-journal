/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var canPartitionGrid = function (grid) {
    let m = grid.length;
    let n = grid[0].length;

    let total = 0;
    for (let row of grid) {
        for (let val of row) {
            total += val;
        }
    }

    if (total % 2 !== 0) return false;
    let half = total / 2;
    let sum = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            sum += grid[i][j];
        }
        if (sum === half) return true;
    }
    sum = 0;
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < m; i++) {
            sum += grid[i][j];
        }
        if (sum === half) return true;
    }

    return false;
};