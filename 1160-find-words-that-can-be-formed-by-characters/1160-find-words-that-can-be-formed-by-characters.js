/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    let charsFreq = chars.split("").reduce((acc, item) => {
        if (acc[item]) {
            acc[item]++
        } else {
            acc[item] = 1
        }
        return acc
    }, {})
    let sum = 0
    for (let i = 0; i < words.length; i++) {
        let freq = words[i].split("").reduce((acc, item) => {
            if (acc[item]) {
                acc[item]++
            } else {
                acc[item] = 1
            }
            return acc
        }, {})
        if (Object.keys(freq).every(item => charsFreq[item] && charsFreq[item] >= freq[item])) {
            sum += words[i].length;
        }
    }

    return sum
};