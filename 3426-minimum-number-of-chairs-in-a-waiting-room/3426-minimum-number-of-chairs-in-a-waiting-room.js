/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let chair=0;
    let person=0;
    for(let i=0;i<s.length;i++){
        if(s[i]=="E"){
            person++
            if(person>chair){
                chair++
            }
        }else{
            person--
        }
    }
    return chair
};