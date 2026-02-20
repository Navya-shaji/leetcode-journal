/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points, queries) {
    let Res = []
    for (let i = 0; i < queries.length; i++) {
        let radius = queries[i][2]
        let count = 0
        for (let j = 0; j < points.length; j++) {
            let result = ((queries[i][0] - points[j][0]) * (queries[i][0] - points[j][0])) +
                ((queries[i][1] - points[j][1]) * (queries[i][1] - points[j][1]))
            if (result <= radius * radius) {
                count++
            }
        }
        Res.push(count)
    }
    return Res
};