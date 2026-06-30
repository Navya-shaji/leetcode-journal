/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumXOR = function (nums) {
    let res = 0
    for (let item of nums) {
        res = res | item
    }
    return res
};