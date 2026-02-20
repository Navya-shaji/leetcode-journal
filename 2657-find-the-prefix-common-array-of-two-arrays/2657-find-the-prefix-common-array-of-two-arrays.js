/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    let Res = []
    for (let i = 0; i < A.length; i++) {
        let count = 0
        for (let j = 0; j <= i; j++) {
            for (let k = 0; k <= i; k++) {
                if (A[j] == B[k]) {
                    count++
                }
            }
        }
        Res.push(count)
    }
    return Res
};