/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let a=stones.sort((a,b)=>a-b)
    return a[0]
};