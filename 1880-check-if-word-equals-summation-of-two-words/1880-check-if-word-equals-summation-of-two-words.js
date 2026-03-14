/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
    let first = firstWord.split("").map(char => char.charCodeAt(0) - 97).join("");
    let second = secondWord.split("").map(char => char.charCodeAt(0) - 97).join("");
    let target = targetWord.split("").map(char => char.charCodeAt(0) - 97).join("");
    return Number(first) + Number(second) == Number(target)
};