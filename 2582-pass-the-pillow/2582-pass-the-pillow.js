/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
    let t = time % (n - 1);

    if (Math.floor(time / (n - 1)) % 2 === 0) {
        return t + 1;
    } else {
        return n - t;
    }
};
