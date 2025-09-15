/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
    return words.filter((item) => item.slice(0, pref.length) == pref).length
};