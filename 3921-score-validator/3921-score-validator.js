/**
 * @param {string[]} events
 * @return {number[]}
 */
var scoreValidator = function (events) {
    let count = 0
    let total = 0
    for (let i = 0; i < events.length; i++) {
        if (events[i] == "W") {
            count++
        } else if (events[i] == "WD" || events[i] == "NB") {
            total += 1
        } else {
            total += Number(events[i])
        }
        if (count == 10) {
            break
        }
    }
    return [total, count]
};