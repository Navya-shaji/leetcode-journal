/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
    let MaxOR = 0
    let count = 0
    let subsets = [[]]
    for (let item of nums) {
        MaxOR = MaxOR | item
    }
    for (let num of nums) {
        let newSubsets = subsets.map(sub => [...sub, num]);
        subsets.push(...newSubsets);
    }
    for (let item of subsets) {
        let val = item.reduce((a, b) => a | b, 0)
        if (val == MaxOR) {
            count++
        }
    }

    return count
};