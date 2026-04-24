/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function (moves) {

    let L = 0;
    let R = 0;
    let U = 0;
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === "L") {
            L++
        } else if (moves[i] === "R") {
            R++
        } else if (moves[i] == "_") {
            U++
        }
    }
    return Math.abs(L - R) + U
}
