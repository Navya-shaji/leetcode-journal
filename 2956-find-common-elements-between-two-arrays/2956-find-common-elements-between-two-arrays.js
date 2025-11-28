/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
    let arr = []
    let count1 = 0
    let count2 = 0
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i])) {
            count1++
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (nums1.includes(nums2[i])) {
            count2++
        }
    }
    arr.push(count1, count2)
    return arr
};