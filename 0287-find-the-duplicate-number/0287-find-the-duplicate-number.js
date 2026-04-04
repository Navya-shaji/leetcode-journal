/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let visited = new Set();
    for (let n of nums) {
        if (visited.has(n)) return n;
        visited.add(n);
    }
};