/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    function BinaryTree(nums) {
        if (nums.length === 0) return null
        let max = Math.max(...nums)
        let index = nums.indexOf(max)
        let root = new TreeNode(max)
        root.left = BinaryTree(nums.slice(0, index))
        root.right = BinaryTree(nums.slice(index + 1))
        return root
    }
    return BinaryTree(nums)
};