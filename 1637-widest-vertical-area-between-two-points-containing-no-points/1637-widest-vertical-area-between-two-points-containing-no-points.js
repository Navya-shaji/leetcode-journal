/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
    points.sort((a, b) => a[0] - b[0])
    let width = 0
    for (let i = 1; i < points.length; i++) {
        let val = points[i][0] - points[i - 1][0]
        width = Math.max(width, val)
    }
    return width
};