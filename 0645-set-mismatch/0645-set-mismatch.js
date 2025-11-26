/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    return [
        nums.find((n, i) => nums.indexOf(n) !== i),
        (nums.length * (nums.length + 1)) / 2 - [...new Set(nums)].reduce((a, b) => a + b, 0)
    ]

};