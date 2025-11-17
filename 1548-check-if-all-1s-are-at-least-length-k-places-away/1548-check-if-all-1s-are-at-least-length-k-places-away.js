/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
    let count1 = 0
    let arr = []
    let count = 0
    let dup=nums.every((item)=>item==0)
    if(dup){
        return dup
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            count++
            arr.push(i)
        }

    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j + 1] > arr[j] + k) {
            count1++
        }
    }
    return count1 + 1 == count

};