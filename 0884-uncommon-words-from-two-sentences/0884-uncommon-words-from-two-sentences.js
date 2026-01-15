/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    let str1 = s1.split(" ")
    let str2 = s2.split(" ")
    return [...str1, ...str2].filter((item, index, arr) => arr.indexOf(item) == arr.lastIndexOf(item))

};