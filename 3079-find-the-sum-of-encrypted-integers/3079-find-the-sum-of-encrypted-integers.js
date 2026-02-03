/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function (nums) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        let max = Math.max(...nums[i].toString().split(""))
        let val = ""
        for (let j = 0; j < nums[i].toString().length; j++) {
            val += max
        }
        arr.push(parseInt(val))
    }
    return arr.reduce((acc, curr) => acc += curr, 0)
};