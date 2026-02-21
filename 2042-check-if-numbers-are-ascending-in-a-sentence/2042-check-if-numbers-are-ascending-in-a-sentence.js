/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
    let array = s.split(" ")
    console.log(array)
    let res = []
    let numbers = /^[0-9]+$/
    let count1 = 1
    let count2 = 1
    for (let i = 0; i < array.length; i++) {
        if (numbers.test(array[i])) {
            res.push(Number(array[i]))
        }
    }
    for (let i = 0; i < res.length; i++) {
        if (res[i] <= res[i-1]) {
           return false
        }
    }
    return true
};