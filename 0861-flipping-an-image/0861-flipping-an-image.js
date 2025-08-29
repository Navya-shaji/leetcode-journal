/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let a=[]
    for(let i=0;i<image.length;i++){
        let img=image[i].reverse()
        let b=[]
        for(let j=0;j<img.length;j++){
            if(img[j]==0){
                b.push(1)
            }else{
                b.push(0)
            }
        }
        a.push(b)
    }
    return a
   
};