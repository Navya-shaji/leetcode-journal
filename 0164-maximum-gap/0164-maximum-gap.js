/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    let sortedArray=nums.sort((a,b)=>a-b)
    console.log(sortedArray)
    let max=0
      if(sortedArray.length<2) return 0
    for(let i=1;i<sortedArray.length;i++){
        let val=sortedArray[i]-sortedArray[i-1]
        if(max <val){
            max=val
        }
       
    }
return max
};