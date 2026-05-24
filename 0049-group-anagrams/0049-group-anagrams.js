/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let obj = {}
    for (let key of strs) {
        let item = key.split("").sort().join("")
        if (!obj[item]) {
            obj[item] = []
        }
        obj[item].push(key)
    }
    return Object.values(obj)
};