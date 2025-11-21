/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        let val = []
        for (let j = 0; j < size; j++) {
            val.push(arr[i])
            i++
        }
        res.push(val.filter(item => item !== undefined))
        i--
    }
    return res
};
