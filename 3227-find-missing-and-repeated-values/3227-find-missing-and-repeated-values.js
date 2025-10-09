/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    let grids = grid.flat()
    let length = grids.length
    const filteredArray = grids.filter((value, index, array) => array.indexOf(value) !== array.lastIndexOf(value))
    const res = new Set(filteredArray)

    const res1 = Array.from(res)
    for (let i = 1; i <= length; i++) {
        if (!grids.includes(i)) {
            res1.push(i)
            break;
        }
    }
    return res1
}