/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
    let Num1 = num1.split("+")
    let Num2 = num2.split("+")
    let a = Number(Num1[0])
    let b = Number(Num2[0])

    let c = Number(Num1[1].slice(0, -1))
    let d = Number(Num2[1].slice(0, -1))
    let sum1 = ((a * b) - (c * d))
    let sum2 = ((a * d) + (b * c) )
    return (`${sum1}+${sum2}i`)

};