/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function (tasks) {
    let res = []
    for (let i = 0; i < tasks.length; i++) {
        let b = tasks[i].reduce((acc, item) => acc += item, 0)
        res.push(b)
    }
    return Math.min(...res)
};