/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let word1 = "qwertyuiop"
    let word2 = "asdfghjkl"
    let word3 = "zxcvbnm"
    let result = []
    for (let i = 0; i < words.length; i++) {
        let val = new Set(words[i].toLowerCase())
        val = [...val]
        let flag1 = true
        let flag2 = true
        let flag3 = true
        for (let j = 0; j < val.length; j++) {
            if (!word1.includes(val[j])) flag1 = false
            if (!word2.includes(val[j])) flag2 = false
            if (!word3.includes(val[j])) flag3 = false
        }

        if (flag1 || flag2 || flag3) {
            result.push(words[i])
        }
    }

    return result
}