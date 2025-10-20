/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
     x=0
    for( i of operations ){
        if(i=="--X"){
             --x;
        }else if(i=="X++"){
            x++;
        }else if(i=="++X"){
            ++x;
        }else if(i=="X--"){
            x--;
        }
       
    }
     return x;
};