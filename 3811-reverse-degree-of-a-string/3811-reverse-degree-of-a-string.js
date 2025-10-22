/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
    let arr = ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm',
        'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']
    let sum = 0
    for (let i = 0; i <= s.length; i++) {
        if (arr.includes(s[i])) {
            let index = arr.indexOf(s[i]) + 1
            console.log(index)
            sum += (index * (i + 1))
        }
    }
    return sum
};