/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let a=""
    let b=x+""
    b.split("")
    for(let i=b.length-1;i>=0;i--){
        if(b[i]!=="-"){
        a+=b[i]
        }
    }
   let d=x<0 ? -Number(a):Number(a)
   if(d<-2147483648||d>2147483648){
    return 0
   }
   return d
};