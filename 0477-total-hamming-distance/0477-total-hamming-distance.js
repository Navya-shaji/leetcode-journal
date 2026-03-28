/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
    let binaryArray = []
    let max = []
    for (let i = 0; i < nums.length; i++) {
        binaryArray.push(nums[i].toString(2))
        max.push(nums[i].toString(2).length)
    }
    let maximum = Math.max(...max)
    let result = []
    for (let i = 0; i < binaryArray.length; i++) {
        result.push(binaryArray[i].padStart(maximum, "0"))
    }
    let count = 0
    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            for (let k = 0; k <maximum; k++) {
                if (result[i][k] !== result[j][k]) {
                    count++
                }

            }
        }
    }
    return count

}