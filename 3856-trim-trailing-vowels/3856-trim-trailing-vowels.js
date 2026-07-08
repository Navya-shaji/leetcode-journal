/**
 * @param {string} s
 * @return {string}
 */
var trimTrailingVowels = function (s) {
    let vowels = ["a", "e", "i", "o", "u"]
    s = s.split("")
    for (let i = s.length - 1; i >= 0; i--) {
        if (vowels.includes(s[i])) {
            s.pop()
        } else {
            break
        }
    }
    return s.join("")
};