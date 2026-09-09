/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    let cities = new Set()
    for (let item of paths) {
        cities.add(item[0])
    }
    for (let item of paths) {
        const dest = item[1];

        if (!cities.has(item[1])) {
            return dest
        }
    }
    return ""
};