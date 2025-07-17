/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let a=[]
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
           
           a.push((nums[i]-1)*(nums[j]-1))
            
        }
    }
    let max=Math.max(...a)
console.log(max)
return max
};