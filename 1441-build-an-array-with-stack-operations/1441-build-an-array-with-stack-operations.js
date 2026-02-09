/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    let stack = []
    let tstack = []
    for (let i = 1; i <= n; i++) {

        if (target.includes(i)) {
            stack.push("Push")
            tstack.push(i)
            console.log(tstack, target)
            if (JSON.stringify(tstack) == JSON.stringify(target)) {
                break;
            }

        } else {
            stack.push("Push")
            stack.push("Pop")

        }

    }
    return stack
};