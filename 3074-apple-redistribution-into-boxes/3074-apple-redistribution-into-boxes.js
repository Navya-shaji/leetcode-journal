/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function (apple, capacity) {
    let Total = apple.reduce((acc, item) => acc += item, 0)
    capacity.sort((a, b) => b - a)
    let count = 0
    for (let i = 0; i < capacity.length; i++) {
        Total -= capacity[i]
        count++
        if (Total <= 0) return count
    }
};