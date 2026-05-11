/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let a=nums.toString().split("")
    let b=[]
    for(let i=0;i<a.length;i++){
        if(a[i]!==","){
            b.push(Number(a[i]))
        }
    }
   return b
};