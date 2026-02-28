/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function (n) {
    let res = ""
    for (let i = 1; i <= n; i++) {
        let val = i.toString(2)
        res += val
    };
    return Number(BigInt("0b" + res) % 1000000007n)
}