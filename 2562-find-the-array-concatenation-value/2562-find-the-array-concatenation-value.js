/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        if (nums.length == 1) {
            arr.push(nums[i])
            break;
        }
        let val = nums[i] + "" + nums[nums.length - 1]
        arr.push(val)
        nums.shift()
        nums.pop()
        i--

    }
    let res = arr.reduce((acc, item) => acc += Number(item), 0)
    return res

};