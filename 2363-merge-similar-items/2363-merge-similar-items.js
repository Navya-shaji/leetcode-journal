/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
    let res = {}
    const items = [...items1, ...items2]
    for (let [v1, v2] of items) {
        if (res[v1]) {
            res[v1] += v2
        } else {
            res[v1] = v2
        }
    }
    return Object.entries(res)
        .map(([v1, v2]) => [Number(v1), v2])
        .sort((a, b) => a[0] - b[0]);
};