/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
    let obj = {}
    for (let num of nums) {
        if (num in obj) {
            return num
        }
        else {
            obj[num] = 1
        }
    }
};