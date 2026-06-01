/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
    let sum = 0
    cost.sort((a, b) => b - a)
    let count = 0
    for (let i = 0; i < cost.length; i++) {
        sum += cost[i]
        count++
        if (count == 3) {
            sum -= cost[i]
            count = 0
        }
    }
    return sum
};