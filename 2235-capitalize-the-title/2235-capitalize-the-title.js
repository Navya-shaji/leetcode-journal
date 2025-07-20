/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let a=title.split(" ")
    let b=[]
    for(let i=0;i<a.length;i++){
        if(a[i].length>2){
        b.push(a[i][0].toUpperCase()+a[i].slice(1).toLowerCase())
    }else{
        b.push(a[i].toLowerCase());
    }
    }
    let c=b.join(" ")
    return c
};