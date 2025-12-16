/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    let arr = []
    let sum = 0

    for (let i = 1; i < s.length; i++) {
        let val1 = s.slice(0, i)
        let val2 = s.slice(i)
        let count = 0
        for (let i of val1) {
            if (i == "0") {
                count++
            }
        }
        sum += count
        count = 0
        let count2 = 0
        for (let j of val2) {
            if (j == "1") {
                count2++
            }
        }
        sum += count2
        arr.push(sum)
        sum = 0
        count2 = 0

    }
    return Math.max(...arr)
};