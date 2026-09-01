/**
 * @param {number} n
 * @param {number[]} requests
 * @return {number}
 */
var elevatorRequests = function(n, requests) {
    let res=0
    let val=0
    for(let item of requests){
        res+=Math.abs(val-item)
        val=item
    }
    return res
};