/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
   if(num<0){
    return (num>>>0).toString(16)
   }else{
    return num.toString(16)
   }
    
};