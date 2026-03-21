/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function (queries, m) {
    let p = []
    let original = []
    for (let i = 0; i < m; i++) {
        p.push(i + 1)
    }
    for (let i = 0; i < queries.length; i++) {
        let index = p.indexOf(queries[i])
        original.push(index)
        p.splice(index, 1)
        p.unshift(queries[i])

    }
    return original

};