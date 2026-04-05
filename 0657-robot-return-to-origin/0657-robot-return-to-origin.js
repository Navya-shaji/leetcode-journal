/**
 * @param {string} moves
 * @return {boolean}
 */
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let vertical = 0;
    let horizontal = 0;
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] == "U") {
            vertical++
        } else if (moves[i] == "D") {
            vertical--
        } else if (moves[i] == "L") {
            horizontal++
        } else if (moves[i] == "R") {
            horizontal--
        }
    }
    return vertical == 0 && horizontal == 0


};