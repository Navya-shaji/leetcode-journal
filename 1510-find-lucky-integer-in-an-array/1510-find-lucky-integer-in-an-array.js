/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    values = arr.reduce((acc, item) => {
        if (acc[item]) {
            acc[item] += 1
        } else {
            acc[item] = 1
        }
        return acc
    }, {})
    let a = Object.values(values)

    let b = Object.keys(values)
    let arrr = []
    for (let i = 0; i < a.length; i++) {
        if (a[i] == Number(b[i])) {
            arrr.push(a[i])
        }
    }

    if (arrr.length !== 0) {
        return Math.max(...arrr)
    } else {
        return -1
    }



};