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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    let queue = [root]
    let res = []
    while (queue.length > 0) {
        let result = []
        let lg = queue.length
        for (let i = 0; i < lg; i++) {
            let current = queue.shift()
            result.push(current.val)
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)

        }
        let sum = result.reduce((acc, item) => acc + item, 0)
        res.push(sum / lg)
    }
    return res
};