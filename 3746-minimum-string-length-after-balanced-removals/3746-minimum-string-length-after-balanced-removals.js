/**
 * @param {string} s
 * @return {number}
 */
var minLengthAfterRemovals = function (s) {
    let freq = s.split("").reduce((acc, item) => {
        if (acc[item]) {
            acc[item]++
        } else {
            acc[item] = 1
        }
        return acc
    }, {})

    let array = Object.values(freq)
    return array.length > 1 ? Math.abs(array[0] - array[1]) : array[0]

};