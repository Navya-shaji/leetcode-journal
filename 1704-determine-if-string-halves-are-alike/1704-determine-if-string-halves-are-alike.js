/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
    let mid = Math.floor(s.length / 2)
    let str1 = s.split("").slice(0, mid)
    let str2 = s.split("").slice(mid)
    let count1 = 0
    let count2 = 0
    let arr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    for (let i = 0; i < str1.length; i++) {
        if (arr.includes(str1[i])) {
            count1++
        }
        if (arr.includes(str2[i])) {
            count2++
        }

    }
    return count1 == count2
};