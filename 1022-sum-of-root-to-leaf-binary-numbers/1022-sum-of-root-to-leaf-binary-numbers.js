/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function (root, res = 0) {
    if(!root) return 0
    res = res * 2 + root.val;
    if (!root.left && !root.right) {
        return res
    }
    return sumRootToLeaf(root.left, res) + sumRootToLeaf(root.right, res)
};