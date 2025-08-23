/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums){
   if(nums.length<=1) return nums;
   let mid=nums.length/2;
   let left=sortArray(nums.slice(0,mid));
   let right=sortArray(nums.slice(mid))
   return Merge(left,right)
}

function Merge(left,right){
let SortedArray=[];
while(left.length && right.length ){
    if(left[0]<right[0]){
      SortedArray.push(left.shift())
    }else{
          SortedArray.push(right.shift())
    }
}
return [...SortedArray,...left,...right]
}