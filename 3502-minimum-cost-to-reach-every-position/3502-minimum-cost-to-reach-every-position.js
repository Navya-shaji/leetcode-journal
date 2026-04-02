/**
 * @param {number[]} cost
 * @return {number[]}
 */
var minCosts = function (cost) {
    for (let i = 1; i < cost.length; i++) {
        if (cost[i - 1] < cost[i]) {
            cost[i] = cost[i - 1];
        }
    }
    return cost;
};