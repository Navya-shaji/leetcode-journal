/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let count_one=0;
    let count_two=0

    for(let i=0;i<nums.length;i++){
        if(nums[i]<0){
            count_one++
        }else if(nums[i]>0){
            count_two++
        }
    }

    let max_count=Math.max(count_one,count_two)
    return max_count
};