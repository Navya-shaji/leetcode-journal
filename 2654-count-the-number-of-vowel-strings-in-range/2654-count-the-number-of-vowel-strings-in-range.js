/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let vowels="AEIOUaeiou"
    let count=0
    for(let i=left;i<=right;i++){
        let a=words[i]
        if(a){
            if(vowels.includes(a[0]) && vowels.includes(a[a.length-1])){
                count++
            }
        }
    }
return count
};