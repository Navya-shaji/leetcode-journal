/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {

let a=num.split("")
let sum1=0
let sum2=0
console.log(a)
for(let i=0;i<a.length;i++){
    if(i%2==0){
        sum1+=Number(a[i])
    }else{
        sum2+=Number(a[i])
    }
}
console.log(sum1)
console.log(sum2)
 return sum1==sum2 ?  true:   false
}

