/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function (cells, n) {
    n = n % 14;
    if (n === 0) n = 14;
    for (let i = 0; i < n; i++) {
        let Day = new Array(8).fill(0)
        for (let j = 1; j < 7; j++) {
            if (cells[j - 1] === cells[j + 1]) {
                Day[j] = 1
            } else {
                Day[j] = 0
            }

        }
        cells = Day

    }
    return cells
};