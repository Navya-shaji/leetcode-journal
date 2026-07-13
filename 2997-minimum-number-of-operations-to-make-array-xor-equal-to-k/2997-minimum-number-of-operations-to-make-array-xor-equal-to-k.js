/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    return (nums.reduce((acc, cur) => acc ^ cur, 0) ^ k).toString(2).split('1').length - 1;
};