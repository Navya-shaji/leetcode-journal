/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let arr1=[]
    let arr2=[]

    for(let i=1;i<=n;i++){
        if(i%m!==0){
            arr1.push(i)
        }else{
            arr2.push(i)
        }
    }
    let sum1=arr1.reduce((acc,item)=>acc+=item,0)
    let sum2=arr2.reduce((acc,item)=>acc+=item,0)
    return sum1-sum2
};