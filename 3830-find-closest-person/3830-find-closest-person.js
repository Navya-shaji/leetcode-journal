/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let val1=Math.abs(x-z)
    let val2=Math.abs(y-z)

    let min=Math.min(val1,val2)
    if(val2==val1){
        return 0
    }else if(val1<val2){
        return 1
    }else{
        return 2
    }
};