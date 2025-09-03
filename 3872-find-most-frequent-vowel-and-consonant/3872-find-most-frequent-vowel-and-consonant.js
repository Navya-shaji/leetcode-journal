/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let vowels = []
    let consonant = []
    let vowelArray = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]
    for (let i = 0; i < s.length; i++) {
        if (vowelArray.includes(s[i])) {
            vowels.push(s[i])
        } else {
            consonant.push(s[i])
        }
    }
    let freq1 = vowels.reduce((acc, item) => {
        if (acc[item]) {
            acc[item]++
        } else {
            acc[item] = 1
        }
        return acc
    }, {})
    let freq2 = consonant.reduce((acc, item) => {
        if (acc[item]) {
            acc[item]++
        } else {
            acc[item] = 1
        }
        return acc
    }, {})
    let arr1 = Math.max(...Object.values(freq1)) == -Infinity ? 0 : Math.max(...Object.values(freq1))
    let arr2 = Math.max(...Object.values(freq2)) == -Infinity ? 0 : Math.max(...Object.values(freq2))
    return arr1 + arr2
};