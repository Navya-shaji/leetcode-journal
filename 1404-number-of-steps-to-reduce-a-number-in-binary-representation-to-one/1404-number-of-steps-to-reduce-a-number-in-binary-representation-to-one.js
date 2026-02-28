/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
    let num = 0n;

    for (let i = 0; i < s.length; i++) {
        let bit = BigInt(s[s.length - 1 - i]);
        num += bit * (2n ** BigInt(i));;
    }
    console.log(num)
    let count = 0
    while (num != 1n) {
        if (num % 2n !== 0n) {
            num = num + 1n
            count++
        } else {
            num = num / 2n
            count++
        }
    }
    return count
};