/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []
    let queue = [root]
    let result = []
    while (queue.length > 0) {
        let res = []
        let lg = queue.length
        for (let i = 0; i < lg; i++) {
            let current = queue.shift()
            res.push(current.val)
            for (let item of current.children) {
                queue.push(item)
            }
        }
        result.push(res)
    }
    return result
};