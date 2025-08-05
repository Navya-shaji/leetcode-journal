/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
    let count = 0
    for (let i = 0; i < fruits.length; i++) {
        for (let j = 0; j < baskets.length; j++) {
            if (fruits[i] <= baskets[j]) {
                baskets[j] = 0
                count++
                break
            }
        }
    }
    return fruits.length-count
};