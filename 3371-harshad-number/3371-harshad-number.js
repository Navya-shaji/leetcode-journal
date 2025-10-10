/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    for(let i=1;i<=x;i++){
       let a = x.toString().split("").reduce((acc, item) => acc + Number(item), 0);
        if(x%a==0){
            return a
        }   else{
            return -1
        }
      
    }

};