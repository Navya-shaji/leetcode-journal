/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let prime=new Array(n+1).fill(true)
    prime[0]=prime[1]=false

    for(let i=2;i*i<=n;i++){
        if(prime[i]){
            for(let j=i*i;j<=n;j+=i){
                prime[j]=false
            }
        }
    }
    let count=0
    for(let j=2;j<n;j++){
        if(prime[j]){
            count++
        }
    }
   return count
};