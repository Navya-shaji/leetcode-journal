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
 * @return {TreeNode}
 */
var balanceBST = function (root) {
    let arr = []
    function Inorder(node) {
        if (!node) return
        Inorder(node.left)
        arr.push(node.val)
        Inorder(node.right)
    }
    function Balancing(left = 0, right = arr.length - 1) {
        if (left > right) return null
        let mid = Math.floor((left + right) / 2)
        let node = new TreeNode(arr[mid])
        node.left = Balancing(left, mid - 1)
        node.right = Balancing(mid + 1, right)
        return node
    }
    Inorder(root);
    return Balancing(0, arr.length - 1);
};