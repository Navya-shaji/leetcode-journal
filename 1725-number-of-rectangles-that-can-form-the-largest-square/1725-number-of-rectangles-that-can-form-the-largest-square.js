/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
    let result = []
    for (let i = 0; i < rectangles.length; i++) {
        let res = Math.min(rectangles[i][0], rectangles[i][1])
        result.push(res)
    }
    let maxLen = Math.max(...result)
    let count = 0
    for (let item of result) {
        if (item == maxLen) {
            count++
        }
    }
    return count
};