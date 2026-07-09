/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function (n, commands) {
    let pos = 0;
    for (let val of commands) {
        if (val === "LEFT") pos -= 1
        if (val === "RIGHT") pos += 1
        if (val === "UP") pos -= n
        if (val === "DOWN") pos += n
    }
    return pos
};