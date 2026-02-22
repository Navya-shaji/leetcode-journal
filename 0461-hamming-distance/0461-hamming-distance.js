/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {

    let xbit = x.toString(2)
    let ybit = y.toString(2)
    let max=Math.max(xbit.length,ybit.length)
    let val1 = xbit.padStart(max, "0")
    let val2 = ybit.padStart(max, "0")

    let count = 0
    for (let i = 0; i < val1.length; i++) {
        for (let j = 0; j < val2.length; j++) {
            if (i == j && val1[i] !== val2[j]) {
                count++
            }
        }
    }
    return count
};