/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr.slice(i, j + 1).length % 2 == 1) {
                res.push(arr.slice(i, j + 1));
            }
        }
    }
    res = res.flat()
    return res.reduce((acc, item) => acc += item)

};