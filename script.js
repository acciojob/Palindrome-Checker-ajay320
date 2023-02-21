// complete the given function

function palindrome(str){
let a=str.trim().toLowerCase().length;
	
	 // const len = str.length;

    
    for (let i = 0; i < a / 2; i++) {

       
        if (str[i] !== str[a - 1 - i]) {
            return true;
        }
    }
    return false;
}
module.exports = palindrome
