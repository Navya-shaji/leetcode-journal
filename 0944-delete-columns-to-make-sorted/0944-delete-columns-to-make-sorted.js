/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {

    let count = 0
    const n = strs[0].length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < strs.length - 1; j++) {
            if (strs[j][i] > strs[j + 1][i]) {
                count++
                break
            }
        }
    }
    return count

};