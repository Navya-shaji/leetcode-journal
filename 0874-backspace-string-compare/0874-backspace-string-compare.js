/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let a=[]
    let b=[]
    for(let i=0;i<s.length;i++){
       a.push(s[i])
       if(s[i]=="#"){
        a.pop()
        a.pop()
       }
    }
     for(let i=0;i<t.length;i++){
       b.push(t[i])
       if(t[i]=="#"){
        b.pop()
        b.pop()
       }
    }
    return a.join("")==b.join("")
   
};