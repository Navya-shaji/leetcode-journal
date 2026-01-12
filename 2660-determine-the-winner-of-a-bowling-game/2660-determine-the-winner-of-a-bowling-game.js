/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function (player1, player2) {
    let sum = 0
    let sum2 = 0


    for (let i = 0; i < player1.length; i++) {
        if (
            (i > 0 && player1[i - 1] === 10) ||
            (i > 1 && player1[i - 2] === 10)
        ) {
            sum += 2 * player1[i];
        } else {
            sum += player1[i]
        }
    }

    for (let i = 0; i < player2.length; i++) {
        if (
            (i > 0 && player2[i - 1] === 10) ||
            (i > 1 && player2[i - 2] === 10)
        ) {
            sum2 += 2 * player2[i];
        } else {

            sum2 += player2[i]
        }
    }

    if (sum == sum2) return 0
    return sum > sum2 ? 1 : 2

};