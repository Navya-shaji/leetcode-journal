/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
*/
var validateCoupons = (code, businessLine, isActive) => {
 let validElectronics=[]
 let validPharmacy=[]
 let validGrocery=[]
 let validRestaurant=[]
 let cate=new Set(["electronics", "grocery", "pharmacy", "restaurant"])
 for(let i=0;i<code.length;i++){
    if(isActive[i] && cate.has(businessLine[i]) && /^[a-z_0-9]+$/i.test(code[i])){
        switch(businessLine[i]){
            case 'electronics':
            validElectronics.push(code[i])
            break;

            case 'grocery':
            validGrocery.push(code[i])
            break;

            case 'pharmacy':
            validPharmacy.push(code[i])
            break;

            default:
            validRestaurant.push(code[i])
        }
    }
 }
 validElectronics.sort()
 validGrocery.sort()
 validPharmacy.sort()
 validRestaurant.sort()

 return validElectronics.concat(validGrocery,validPharmacy,validRestaurant)

};