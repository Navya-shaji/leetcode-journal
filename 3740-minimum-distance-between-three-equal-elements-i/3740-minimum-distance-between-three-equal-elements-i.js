/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function (nums) {
    let res = Infinity;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] === nums[j] && nums[j] === nums[k]) {
                    let val = Math.abs(i - j) +
                        Math.abs(j - k) +
                        Math.abs(k - i)
                    res = Math.min(res, val)
                }
            }
        }
    }
    return res === Infinity ? -1 : res;
};