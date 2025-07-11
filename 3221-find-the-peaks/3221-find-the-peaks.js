/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
    let a=[]
    for(let i=0;i<mountain.length;i++){
        if(mountain[i]>mountain[i-1] && mountain[i]>mountain[i+1]){
            a.push(i)
        }
    }
    return a
};