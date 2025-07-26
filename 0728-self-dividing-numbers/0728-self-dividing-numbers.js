/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let a = []
    for (let i = left; i <= right; i++) {
        if (i < 10) {
            a.push(i)
        } else {
            let nums = i.toString().split("")
            let flag = 0
            for (let j = 0; j < nums.length; j++) {
                let b = Number(nums[j])
                if (i % b !== 0 || i == 0) {
                    flag = 1
                    break;
                }
            }
            if (flag == 0) {
                a.push(i)
            }
        }
    }

    return a
};