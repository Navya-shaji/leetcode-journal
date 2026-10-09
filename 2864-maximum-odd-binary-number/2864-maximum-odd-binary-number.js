/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
    let ones = s.split('1').length - 1;
    let zeros = s.length - ones;
    let result = "";

    for (let i = 1; i < ones; i++) {
        result += "1";
    }

    for (let i = 0; i < zeros; i++) {
        result += "0";
    }

    result += "1";

    return result;
};