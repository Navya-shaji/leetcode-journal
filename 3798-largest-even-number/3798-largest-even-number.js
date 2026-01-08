/**
 * @param {string} s
 * @return {string}
 */
var largestEven = function (s) {
    let res = ""
    let arr = []
    for (let i = 0; i < s.length; i++) {
        res += s[i]
        console.log(res)
        let val = res.split("").pop()
        console.log(val)
        if (Number(res) % 2 == 0 && val === "2" || val === 2) {
            arr.push(res)
        }
    }
    let result = arr.reduce((acc, item) => acc.length > item.length ? acc : item, "")
    return result
};