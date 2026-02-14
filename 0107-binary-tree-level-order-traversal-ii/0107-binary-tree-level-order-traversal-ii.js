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
var levelOrderBottom = function (root) {
    if (!root) return []
    let result = []
    let queue = [root]
    let original=[]
    while (queue.length > 0) {
        let res = []
        let lg = queue.length
        for (let i = 0; i < lg; i++) {
            let current = queue.shift()
            res.push(current.val)
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        result.push(res)
    }
   return result.reverse()
    
};