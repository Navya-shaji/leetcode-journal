/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
    let arr = []
    for (let i = 0; i < pref.length; i++) {
        arr.push(pref[i] ^ pref[i - 1])
    }
    return arr
};