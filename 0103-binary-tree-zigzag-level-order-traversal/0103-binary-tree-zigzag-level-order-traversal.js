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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) return []
    let queue = [root]
    let result = []
    let count = 1
    while (queue.length > 0) {
        let res = []
        let lg = queue.length
        for (let i = 0; i < lg; i++) {
            let current = queue.shift()
            res.push(current.val)
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        if (count % 2 !== 0) {
            result.push(res)
        } else {
            res.reverse()
            result.push(res)
        }
        count++
    }
    return result
};