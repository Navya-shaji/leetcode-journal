/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
    let count = 0
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            let w1 = [...new Set(words[i])].sort().join("")
            let w2 = [...new Set(words[j])].sort().join("")
            if (w1 == w2) {
                count++
            }
        }
    }
    return count
};