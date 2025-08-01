/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
    let result=[]
    for(let i=0;i<numRows;i++){
        let rows=[]
        for(let j=0;j<=i;j++){
            if(j===0 || j===i){
                rows.push(1)
            }else{
                const val=result[i-1][j-1]+result[i-1][j]
                rows.push(val)
            }
        }
        result.push(rows)
    }
    return result
}
