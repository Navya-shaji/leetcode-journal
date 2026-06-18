/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
    let m = minutes * 6;
    let h = (hour % 12) * 30 + minutes * 0.5;
    let diff = Math.abs(h - m);
    return Math.min(diff, 360 - diff);
};