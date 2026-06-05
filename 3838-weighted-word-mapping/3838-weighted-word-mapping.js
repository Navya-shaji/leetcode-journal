/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function (words, weights) {
    let text = "abcdefghijklmnopqrstuvwxyz"
    let res = ""
    for (let item of words) {
        let sum = 0
        for (let i = 0; i < item.length; i++) {
            let index = text.indexOf(item[i])
            sum += weights[index]
        }
        let mod = Math.floor(sum % 26)
        let index2 = 26 - mod
        res += text[index2 - 1]
    }
    return res

};