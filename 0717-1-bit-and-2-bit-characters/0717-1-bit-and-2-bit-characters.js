/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
    let i=0
    while(i<bits.length){
        if(bits[i]==0){
            i++
            res=true
        }else{
            res=false
            i+=2
        }
    }
    return res
};