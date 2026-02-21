/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
    let newArray = []
    for (let i = 0; i < nums.length; i++) {
        let reversed = nums[i].toString().split("")
        let val = reversed.reverse().join("")
        newArray.push(Number(val))
    }
    let res = nums.concat(newArray)
    return new Set(res).size
};