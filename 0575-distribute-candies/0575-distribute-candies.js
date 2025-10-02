/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let candy=new Set(candyType)
    return Math.min(candy.size,candyType.length/2)
};