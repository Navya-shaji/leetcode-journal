/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
let res=s[0]
let count=1

for(let i=1;i<s.length;i++){
    if(s[i]===s[i-1]){
        count++
    }else{
        count=1
    }
if(count<3){
    res+=s[i]
}
}
return res
};