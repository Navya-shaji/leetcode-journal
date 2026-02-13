/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
    let res = s.split("")
    let arr = []
    let freq = res.reduce((acc, item) => {
        if (acc[item]) {
            acc[item]++
        } else {
            acc[item] = 1
        }
        return acc
    }, {})
    for (let item in freq) {
        arr.push(freq[item])
    }
    return arr.every(item => arr[0] == item)
};