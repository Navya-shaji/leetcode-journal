/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function (s) {
    let len = s.length, even = 0, odd = 0, min = Infinity;
    if (len % 2) s += s;
    for (let i = 0; i < s.length; i++) {
        even += (i % 2 !== +s[i]);
        odd += ((i % 2) === +s[i]);
        if (i >= len) {
            even -= ((i - len) % 2 !== +s[i - len]);
            odd -= (((i - len) % 2) === +s[i - len]);
        }
        if (i >= len - 1) min = Math.min(min, even, odd);
    }
    return min;


};