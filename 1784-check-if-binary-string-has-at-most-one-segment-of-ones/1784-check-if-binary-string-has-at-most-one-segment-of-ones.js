/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "0") {
            for (let j = i + 1; j < s.length; j++) {
                if (s[j] === "1") {
                    return false
                }
            }
        }
    }
    return true
};
