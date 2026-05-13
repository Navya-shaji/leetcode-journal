/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
    let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    date = date.split(" ")
    let day = date[0].slice(0, -2,).padStart(2, "0")
    let mon = (month.indexOf(date[1]) + 1).toString().padStart(2, "0")
    let year = date[2]
    return `${year}-${mon}-${day}`

};