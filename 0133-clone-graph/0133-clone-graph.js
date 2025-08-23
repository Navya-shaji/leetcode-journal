/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;

    let visited = new Map();
    let queue = [node];
    visited.set(node, new _Node(node.val));

    while (queue.length) {
        let current = queue.shift();

        for (let neighbor of current.neighbors) {
            if (!visited.has(neighbor)) {
                visited.set(neighbor, new _Node(neighbor.val));
                queue.push(neighbor);
            }
            visited.get(current).neighbors.push(visited.get(neighbor));
        }
    }

    return visited.get(node);
};
