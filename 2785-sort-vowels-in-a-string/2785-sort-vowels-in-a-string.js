/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
    let vowels = ["a", "e", "i", "o", "u",
        "A", "E", "I", "O", "U"];
    let res = []
    let max = 0
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            res.push(s[i])
        }
    }
    let sorted = res.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    let val = s.split("")
    let index = 0
    for (let i = 0; i < val.length; i++) {
        if (vowels.includes(val[i])) {
            val[i] = sorted[index]
            index++
        }

    }
    return val.join("")

};