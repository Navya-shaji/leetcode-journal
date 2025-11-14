/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function (nums, k) {
    let a = []
    let count = 0
    let max = nums.sort((a, b) => b - a)
    console.log(max)
    for (let i = 0; i < max.length; i++) {
        if (!a.includes(max[i]) && count < k) {
            a.push(max[i])
            count++
        }
    }
    return a
};