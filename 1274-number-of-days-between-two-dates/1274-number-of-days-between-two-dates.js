/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    let a=new Date(date1)
    let b=new Date(date2)
    let ms=1000*60*60*24
    let diff=Math.abs((a-b)/ms)
    return diff
};