/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    return nums.filter((num, index, arr) =>
        arr.indexOf(num) === arr.lastIndexOf(num)
    )
};