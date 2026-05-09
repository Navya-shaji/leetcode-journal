/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countOppositeParity = function (nums) {
    let res = []
    for (let i = 0; i < nums.length; i++) {
        let count = 0
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] % 2 !== 0) {
                if (nums[j] % 2 == 0) {
                    count++
                }
            } else if (nums[i] % 2 == 0) {
                if (nums[j] % 2 !== 0) {
                    count++
                }
            }
        }
        res.push(count)
    }
    return res
};