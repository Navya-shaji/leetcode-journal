/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let a=[]
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length;i++){
        if(i==0 || i%2==0){
            a.push(nums[i+1])
        } else {
            a.push(nums[i-1])
        }
    }
     
     return a

};