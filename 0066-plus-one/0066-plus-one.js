/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {


 let Last=digits.length-1
 digits[Last]++
for(i=Last;i>=0;i--)
{
    if(digits[i]==10)
    {
        digits[i]=0
        if(i==0)
        {
            digits.unshift(1)
        }else{
            digits[i-1]++
        }
    }
}
return digits

};