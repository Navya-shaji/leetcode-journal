/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
    costs.sort((a, b) => a - b)
    console.log(costs)
    let sum = 0
    let count = 0
    for (let i = 0; i < costs.length; i++) {
        if (sum + costs[i] <= coins) {
            sum += costs[i];
            count++
        } else {
            break
        }
    }
    return count
};