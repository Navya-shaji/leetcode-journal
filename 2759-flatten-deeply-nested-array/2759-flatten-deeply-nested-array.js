/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let result=[]
  for(let char of arr){
    if(Array.isArray(char) &&n>0){
        result.push(...flat(char,n-1))
    }else{
        result.push(char)
    }
  }
  return result
};