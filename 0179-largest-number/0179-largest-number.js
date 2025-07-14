/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
let numstr=nums.map(String).sort((a,b)=>(b + a) - (a + b)).join("")
 if(numstr[0]=="0"){
    return "0"
 }else{
    return numstr
 }

};