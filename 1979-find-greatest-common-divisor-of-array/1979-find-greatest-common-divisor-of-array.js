/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    let a = Math.max(...nums)
    let b = Math.min(...nums)
    let gcd = 1
    for (let i = 1; i <= a; i++) {
        if (a % i == 0 && b % i == 0) {
            gcd = i
        }
    }
    return gcd
};