/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let freq1 = ransomNote.split("").reduce((acc, item) => {
        if (acc[item]) {
            acc[item]++
        } else {
            acc[item] = 1
        }
        return acc
    }, {})
    let freq2 = magazine.split("").reduce((acc, item) => {
        if (acc[item]) {
            acc[item]++
        } else {
            acc[item] = 1
        }
        return acc
    }, {})

    for (let item in freq1) {
        if (!freq2[item] || freq2[item] < freq1[item]) {
            return false
        }
    }
    return true
};