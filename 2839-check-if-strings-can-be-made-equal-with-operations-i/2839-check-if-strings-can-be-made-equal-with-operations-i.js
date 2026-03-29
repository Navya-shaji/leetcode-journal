/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function (s1, s2) {
    let Even1 = [s1[0], s1[2]].sort().join("")
    let Even2 = [s2[0], s2[2]].sort().join("")

    let Odd1 = [s1[1], s1[3]].sort().join("")
    let Odd2 = [s2[1], s2[3]].sort().join("")
    return Even1 == Even2 && Odd1 == Odd2
};