/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function (num1, num2) {
    let result = 0
    for (let i = num1; i <= num2; i++) {
        let str = i.toString()
        for (let j = 1; j < str.length; j++) {
            let left = Number(str[j - 1])
            let cur = Number(str[j])
            let right = Number(str[j + 1])
            if ((cur > left && cur > right) ||
                (cur < left && cur < right)) {
                result++;
            }
        }
    }
    return result
}