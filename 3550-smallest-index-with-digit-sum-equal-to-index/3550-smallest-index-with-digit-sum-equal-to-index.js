/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function (nums) {
    let small = Infinity

    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i].toString().split("").reduce((acc, item) => acc + Number(item), 0)
        if (i == sum && sum < small) {
            small = sum
        }
    }
    return small == Infinity ? -1 : small
};