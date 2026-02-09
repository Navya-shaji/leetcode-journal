/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        let last = stack[stack.length - 1]
        if (last === "A" && s[i] === "B" || last === "C" && s[i] === "D") {
            stack.pop();
        } else {
            stack.push(s[i])
        }
    }
    return stack.length
};