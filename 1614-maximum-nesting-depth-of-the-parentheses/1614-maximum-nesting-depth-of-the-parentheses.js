/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let depth = 0
    let maxDepth = 0
    for (let i = 0; i <= s.length; i++) {
        if (s[i] == "(") {
            depth++
            maxDepth = Math.max(depth, maxDepth)
        } else if (s[i] == ")") {
            depth--
        }

    }
    return maxDepth

};