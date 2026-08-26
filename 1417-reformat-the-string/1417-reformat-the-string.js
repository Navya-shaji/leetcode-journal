/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
    let a = []
    let b = []
    for (let item of s) {
        isNaN(item) ? a.push(item) : b.push(item);
    }
    if (a.length < b.length) {
        [a, b] = [b, a]
    }
    if (Math.abs(a.length - b.length) > 1) return '';
    return a.map((x, i) => x + (b[i] || '')).join('');
};