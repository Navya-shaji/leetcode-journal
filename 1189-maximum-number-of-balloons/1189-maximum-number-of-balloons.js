/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    let str = "balloon"
    const freq = [...text].filter((item) => str.includes(item)).reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});
    return Math.min(
        freq.b || 0,
        freq.a || 0,
        Math.floor((freq.l || 0) / 2),
        Math.floor((freq.o || 0) / 2),
        freq.n || 0
    );
};