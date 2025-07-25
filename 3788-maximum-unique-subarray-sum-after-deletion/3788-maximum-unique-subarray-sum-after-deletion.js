/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    let a=[]
    let b=[]
    let sum=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]<0){
            b.push(nums[i])
        }
        for(let j=0;j<nums.length;j++){
            if(nums[i]>0 && nums[i]!==0){
                if(!a.includes(nums[i])){
                a.push(nums[i])
                sum+=nums[i]
                }
               
            }
        }
    }

    if(nums.length==b.length) {
       return Math.max(...nums)
    }
    return sum
   
};