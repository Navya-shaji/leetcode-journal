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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
   let result = 0
    let ans = 0
    const rec = (node) => {
        if (!node) return;
        rec(node.left);
        result+=1
        if(result == k) {
            ans = node.val
        }
        rec(node.right);
    }
    rec(root)
    return ans

};