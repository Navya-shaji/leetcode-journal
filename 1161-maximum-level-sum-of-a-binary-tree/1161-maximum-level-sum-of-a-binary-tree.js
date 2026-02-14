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
var maxLevelSum = function (root) {
    if (!root) return 0
    let result = []
    let queue = [root]

    let index = 1
    let max = -Infinity
    let level = 0
    while (queue.length) {
        let res = []
        let lg = queue.length
        for (let i = 0; i < lg; i++) {
            let current = queue.shift()
            res.push(current.val)
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        level++
        let sum = res.reduce((acc, item) => acc += item, 0)
        console.log(sum)
        if (max < sum) {
            max = sum
            index = level
        }
    }
    return index
};