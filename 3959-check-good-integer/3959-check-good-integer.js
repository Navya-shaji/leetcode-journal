/**
 * @param {number} n
 * @return {boolean}
 */
var checkGoodInteger = function (n) {
    let str = n + ""
    let squareSum = 0
    let digitSum = 0
    for (let i = 0; i < str.length; i++) {
        squareSum += Number(str[i]) * Number(str[i])
        digitSum += Number(str[i])
    }
    let res = squareSum - digitSum
    return res >= 50 ? true : false
};