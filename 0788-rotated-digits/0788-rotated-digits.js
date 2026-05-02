/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function (n) {
    let count = 0
    for (let i = 1; i <= n; i++) {
        let str = i.toString()
        if (str.includes('3') || str.includes('4') || str.includes('7')) {
            continue;
        }
        if (
            str.includes('2') ||
            str.includes('5') ||
            str.includes('6') ||
            str.includes('9')
        ) {
            count++;
        }
    }
    return count
};