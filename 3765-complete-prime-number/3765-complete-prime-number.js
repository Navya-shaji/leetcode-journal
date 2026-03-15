/**
 * @param {number} num
 * @return {boolean}
 */
var completePrime = function (num) {

    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    let s = num.toString();
    let n = s.length;

    for (let i = 1; i <= n; i++) {
        let prefix = Number(s.slice(0, i));
        if (!isPrime(prefix)) return false;
        let suffix = Number(s.slice(n - i));
        if (!isPrime(suffix)) return false;
    }

    return true;
};