/**
 * @param {string} s
 * @return {number}
 */
var numSub = function (s) {
    let count = 0
    let MOD = 1000000007
    let result = 0
    let sub = s.split("0").filter(item => item !== "")
    for (let i = 0; i < sub.length; i++) {
        let n = sub[i].length
        count += n * (n + 1) / 2
        result = count % MOD
    }
    return result
};