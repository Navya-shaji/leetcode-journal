/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
    const Equal = ((a, b) => JSON.stringify(a) == JSON.stringify(b))
    for (let k = 0; k < 4; k++) {
        if (Equal(mat, target)) return true
        for (let i = 0; i < mat.length; i++) {
            for (let j = i; j < mat.length; j++) {
                [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]]
            }
        }
        for (let item of mat) {
            item.reverse()
        }
    }
    return false
};