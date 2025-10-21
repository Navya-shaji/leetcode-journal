/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
let a=[]
let b=[]

for(let char of nums1){
    if(nums2.includes(char)){
        a.push(char)
    }else if(nums3.includes(char)){
        a.push(char)
    }
}
for(let char of nums2){
    if(nums1.includes(char)){
        b.push(char)
    }else if(nums3.includes(char)){
        b.push(char)
    }
}
let c=a.concat(b)
let d=new Set(c)
// let arr=[...d]
let arr1=Array.from(d)
return arr1
};