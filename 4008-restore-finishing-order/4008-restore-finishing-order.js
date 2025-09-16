/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    let a=[]
    for(let i=0;i<order.length;i++){
        for(let j=0;j<friends.length;j++){
            if(order[i]==friends[j]){
                a.push(order[i])
            }
        }
    }
return a
};