/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function (code, businessLine, isActive) {
    let keys = [];
    const categories = ["electronics", "grocery", "pharmacy", "restaurant"];
    for (let i = 0; i < code.length; i++) {
        if (/^[a-zA-Z0-9_]+$/.test(code[i]) && categories.includes(businessLine[i]) && isActive[i]) {
            keys.push(i);
        }
    }

    return keys.sort((i, j) => businessLine[i].localeCompare(businessLine[j]) || (code[i] > code[j] ? 1 : (code[i] === code[j] ? 0 : -1))).map(i => code[i]);
};