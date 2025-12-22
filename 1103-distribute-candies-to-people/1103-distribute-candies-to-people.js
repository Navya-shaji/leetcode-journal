/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
    let arr = []
    for (let i = 0; i < num_people; i++) {
        arr.push(0)
    }
    let ind = 1;
    let j = 0;
    while (candies > 0) {
        if (j > arr.length - 1) {
            j = 0;
        }
        arr[j] += (ind > candies) ? candies : ind;
        candies = candies - ind;
        ind++;
        j++;
    }
    return arr
};