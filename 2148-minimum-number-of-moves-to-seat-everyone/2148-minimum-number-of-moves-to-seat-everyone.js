/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
    let newArray = []
    let arr1 = seats.sort((a, b) => a - b)
    let arr2 = students.sort((a, b) => a - b)
    for (let i = 0; i < arr1.length; i++) {
        newArray.push(Math.abs(arr1[i] - arr2[i]))
    }
    return newArray.reduce((acc, item) => acc += item, 0)
};