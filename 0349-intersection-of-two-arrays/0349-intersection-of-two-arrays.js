/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let arr = []
    let a = new Set(nums1)
    let b = new Set(nums2)
    let nums11 = Array.from(a)
    let nums22 = Array.from(b)
    let c = nums11.concat(nums22)
 
    for (let i = 0; i < c.length; i++) {
        for (let j = i + 1; j < c.length; j++) {
            if (c[i] == c[j]) {
                arr.push(c[i])
            }
        }
    }
    return arr
};