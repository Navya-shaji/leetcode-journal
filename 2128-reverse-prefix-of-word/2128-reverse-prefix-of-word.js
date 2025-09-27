/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    let res = ""
    let res2 = ""
    let count = 0
    for (let i = 0; i < word.length; i++) {
        res += word[i]
        count++
        if (word[i] == ch) {
            break;
        }
    }
    if (!word.includes(ch)) {
        return word
    }
    let rev = [...res].reverse().join("");
    for (let j = count; j < word.length; j++) {
        res2 += word[j]
    }

    return rev + res2

};