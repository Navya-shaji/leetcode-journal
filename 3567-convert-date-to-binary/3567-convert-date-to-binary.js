/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
    const dat = new Date(date)
    let year = dat.getFullYear()
    let month = dat.getMonth() + 1
    let day = dat.getDate()
    return year.toString(2) + "-" + month.toString(2) + "-" + day.toString(2)
};