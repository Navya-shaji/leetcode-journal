/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    let arr1 = s.split("")
    let arr2 = t.split("")
    let freq1 = arr1.reduce((acc, item) => {
        if (acc[item]) {
            acc[item]++;
        } else {
            acc[item] = 1;
        }
        return acc;
    }, {});

    let freq2 = arr2.reduce((acc, item) => {
        if (acc[item]) {
            acc[item]++
        } else {
            acc[item] = 1
        }
        return acc
    }, {})
    let min = 0
    for (let item in freq1) {
        let count1 = freq1[item]
        let count2 = freq2[item] || 0
        if (count1 > count2) {
            min += Math.abs(count1 - count2)
        }
    }
    return min
};