/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
    let b = []
    let a = amount.reduce((acc, item) => {
        acc = acc + item
        return acc
    }, 0)
    let c = Math.ceil(a / 2)
    let maxValue = Math.max(amount[0], amount[1], amount[2])
    if (maxValue > c) {
        return maxValue
    }
    return c
};