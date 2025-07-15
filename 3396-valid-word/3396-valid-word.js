/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
   let a = /^[a-zA-Z0-9]$/;
   let words=word.split("")
   console.log(word)
    let count=0
    let b=[]
    let c=[]
    let d=[]
    let vowels=["a","e","i","o","u","A","E","I","O","U"]
    let consonantArray = [
  'b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z',
  'B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z'
];

 for(let char of word){
    count++
    if(a.test(char) ){
        b.push(char)
    }
 }
 for(let i=0;i<b.length;i++){
    if(vowels.includes(b[i])){
        c.push(b[i])
    }else if(consonantArray.includes(b[i])){
        d.push(b[i])
    }

 }
 console.log(count,c,d)
   if(count>=3 && c.length!==0 && d.length!==0 && b.length=== words.length ) {
    return true
   }else{
    return false
   }
};