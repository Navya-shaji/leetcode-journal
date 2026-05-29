/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
    let res = []
    for (let i = 0; i < nums.length; i++) {
        a = nums[i] + ""
        let value = a.split("").reduce((acc, item) => acc += Number(item), 0)
        res.push(value)
    }
    return Math.min(...res)
};