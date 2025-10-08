/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
    let newArray = nums.sort((a, b) => a - b)
    let res = []
    for (let i = 0; i < newArray.length; i++) {
        res.push((newArray[i] + newArray[newArray.length - 1]) / 2)
        newArray.length--
    }
    return Math.min(...res)
};