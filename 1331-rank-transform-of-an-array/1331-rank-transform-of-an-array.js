/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    const sorted = [...new Set(arr)].sort((a, b) => a - b);

    const rank = new Map();

    for (let i = 0; i < sorted.length; i++) {
        rank.set(sorted[i], i + 1);
    }

    return arr.map(x => rank.get(x));
};