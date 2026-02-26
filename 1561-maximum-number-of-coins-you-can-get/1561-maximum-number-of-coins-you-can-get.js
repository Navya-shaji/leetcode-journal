/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
    piles.sort((a, b) => a - b);
    let sum = 0
    let len = piles.length / 3
    for (let i = 0; i < len; i++) {
        piles.shift()
        piles.pop()
        sum += piles.pop()
    }
    return sum
};