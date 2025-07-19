/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
 let a=x.toString().split("").reverse().join("")
 if(a==x){
    return true
 }else{
    return false
 }
 console.log(a)
 
 };