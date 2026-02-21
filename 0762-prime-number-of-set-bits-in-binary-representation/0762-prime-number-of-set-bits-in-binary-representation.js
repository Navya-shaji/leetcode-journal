/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
    let helper = [2, 3, 5, 7, 11, 13, 17, 19.]
    let Result = []
    let count1 = 0
    for (let i = left; i <= right; i++) {
        let count = 0
        let values = i.toString(2)
        for (let j = 0; j < values.length; j++) {
            if (values[j] == "1") {
                count++
            }
        }
        Result.push(count)

    }
    for (let i = 0; i < Result.length; i++) {
        if (helper.includes(Result[i])) {
            count1++
        }
    }
    return count1
};