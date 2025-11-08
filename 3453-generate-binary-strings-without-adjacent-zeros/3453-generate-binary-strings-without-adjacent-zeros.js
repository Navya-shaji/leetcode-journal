/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function (n) {
    if (n === 0) return [""]
    const res = validStrings(n - 1)
    let ans = []
    for (let items of res) {
        ans.push("0" + items)
        ans.push("1" + items)
    }
    const final = ans.filter(item => !item.includes("00"))
    return final
};