//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (x) => {
    x = x.toLowerCase();
var i;
var b;

    for(i=97 ; i++ ; i<=122){
        b = String.fromCharCode(i);
        if(x.includes(b)!=true) {
             break;
        }
 
    }
    if(i==123){
        return true;
    }
    else{
        return false;
    }
    
};
