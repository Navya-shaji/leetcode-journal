/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let obj = new Set(word);
    let count = 0;

    for (let char of obj) {

        if (
            word.includes(char.toLowerCase()) &&
            word.includes(char.toUpperCase()) &&
            word.lastIndexOf(char.toLowerCase()) <
            word.indexOf(char.toUpperCase())
        ) {
            count++;
        }
    }

    return count/2;
};