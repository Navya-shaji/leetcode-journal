/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
    let count = 0
    let obj = new Set()
    for (let i = 0; i < word.length; i++) {
        let char = word[i]
        if (word.includes(char.toUpperCase()) && word.includes(char.toLowerCase())) {
            obj.add(word[i].toUpperCase())

        }
    }
    return obj.size
};