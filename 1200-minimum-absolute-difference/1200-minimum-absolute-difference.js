/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    arr.sort((a, b) => a - b)
    let min = Infinity
    let result = []
    for (let i = 1; i < arr.length; i++) {
        min = Math.min(min, arr[i] - arr[i - 1])
    }
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] - arr[j - 1] === min) {
            result.push([arr[j - 1], arr[j]])
        }
    }
    return result
};
