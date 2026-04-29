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
var sumEvenGrandparent = function (root) {
    let sum = 0
    function FindGP(node, parent, gp) {
        if (!node) return
        if (gp) {
            if (gp.val % 2 == 0) {
                sum += node.val

            }
        }
        console.log(sum)
        FindGP(node.left, node, parent)
        FindGP(node.right, node, parent)
    }
    FindGP(root, null, null)
    return sum
};