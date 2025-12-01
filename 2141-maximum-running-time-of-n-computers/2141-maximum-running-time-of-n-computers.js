/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function (n, batteries) {
    let left = 0;
    let right = Math.floor(batteries.reduce((acc, item) => acc + item, 0) / n)

    function isWork(time) {
        let total = 0
        for (let items of batteries) {
            total += Math.min(items, time)
        }
        return total >= n * time
    }

    while (left < right) {
        let mid = Math.floor((left + right + 1) / 2)
        if (isWork(mid)) {
            left = mid
        } else {
            right = mid - 1
        }
    }
    return left
};