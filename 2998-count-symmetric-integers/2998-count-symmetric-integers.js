/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
   let count=0
    for(let i=low;i<=high;i++){
        let val=i.toString()
        if(val.length%2!==0) continue;
        let half=val.length/2
        let left=val.slice(0,half)
        let right=val.slice(half)
        let sum1=[...left].reduce((acc,item)=>acc+Number(item),0)
        let sum2=[...right].reduce((acc,item)=>acc+=Number(item),0)
        if(sum1==sum2){
            count++
        }
    }
    
    return count
};