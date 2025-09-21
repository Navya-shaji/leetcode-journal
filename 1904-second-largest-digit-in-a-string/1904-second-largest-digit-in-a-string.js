/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let a=[]
    for(let i=0;i<s.length;i++){
        if(Number(s[i])<=9){
            a.push(Number(s[i]))
        }
    }
   let b=new Set(a)
   let c=Array.from(b).sort((a,b)=>a-b)
  return  c.length<2? -1: c[c.length-2]
};