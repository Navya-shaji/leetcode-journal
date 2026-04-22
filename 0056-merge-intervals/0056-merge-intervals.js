/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0])
    console.log(intervals)
    let res = []
    for (let i = 0; i < intervals.length; i++) {
        let min = intervals[i][0]
        let max = intervals[i][1]
        while (i < intervals.length - 1 && max >= intervals[i + 1][0]) {
            max = Math.max(max, intervals[i + 1][1])
            i++
        }

        res.push([min, max])
    }
    return res
}
