/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
     k=k%nums.length
    let NewArray=nums.slice(-k)

    for(let i=0;i<nums.length-k;i++){
        NewArray.push(nums[i])
    }
    for(let i=0;i<nums.length;i++){
        nums[i]=NewArray[i]
    }
return NewArray
};