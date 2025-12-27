/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let sum = 0
    let res = []
    res.push(0)
    for (let i = 0; i < gain.length; i++) {
        sum += gain[i]
        res.push(sum)
    }
    return Math.max(...res)
};