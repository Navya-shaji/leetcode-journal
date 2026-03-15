/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
    let arr = []
    let val = []
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i][0] == nums2[j][0]) {
                arr.push([nums1[i][0], nums1[i][1] + nums2[j][1]])
                val.push(nums1[i][0])
            }
        }
    }
    for (let i = 0; i < nums1.length; i++) {
        if (!val.includes(nums1[i][0])) {
            arr.push(nums1[i]);
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (!val.includes(nums2[i][0])) {
            arr.push(nums2[i]);
        }
    }

    return arr.sort((a, b) => a[0] - b[0])

};