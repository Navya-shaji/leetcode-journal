/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    let reverse=n.toString().split("").reverse().join("")
    return Math.abs(n-Number(reverse))
};