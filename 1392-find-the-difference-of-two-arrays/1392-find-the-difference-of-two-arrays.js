/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    let num1 = new Set(nums1)
    let num2 = new Set(nums2)

    let diff1 = [...num1].filter((item) => !num2.has(item))
    let diff2 = [...num2].filter((item) => !num1.has(item))


    return [diff1,diff2]
};