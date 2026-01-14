/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
    let count = 0
    let words = text.split(" ")
    const length1 = words.length

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < brokenLetters.length; j++) {
            if (words[i].includes(brokenLetters[j])) {
                count++
                break
            }

        }

    }
    return length1 - count

};