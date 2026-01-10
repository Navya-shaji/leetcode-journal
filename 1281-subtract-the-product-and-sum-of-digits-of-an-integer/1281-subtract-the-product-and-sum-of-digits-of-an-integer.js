/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
   
    let sum=0
    let pr=1
    let res=n+""
    for(let i=0;i<res.length;i++){
        sum+=Number(res[i])
        pr*=Number(res[i])
    }
    return pr-sum
};