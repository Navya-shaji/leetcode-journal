/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let max=0
    let res=nums.reduce((acc,item)=>{
        if(acc[item]){
            acc[item]++
        }else{
            acc[item]=1
        }
        return acc
    },{})
    console.log(res)
    return nums.sort((a,b)=>res[a]==res[b] ? b-a:res[a]-res[b])
};