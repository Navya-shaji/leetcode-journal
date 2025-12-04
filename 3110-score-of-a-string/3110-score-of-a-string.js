/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let a=s.split("")
    let b=[]
    let c=[]
    for(let char of a){
        b.push(char.charCodeAt(0))
    }
    for(let i=0;i<b.length;i++){
        for(let j=i+1;j<b.length;j++){
           c.push(Math.abs(b[i]-b[j]))
           i++
           
        }
    }
    let d=c.reduce((acc,item)=>acc+item,0)
   return d
    console.log(d)
};