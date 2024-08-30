console.log(`=======Palindrome or Not==========`);
function checkPalindrome(string) {
    // find the length of a string
    const len = string.length;

    // loop through half of thr string
    for (let i = 0; i < length / 2; i++) {
        const element = array[i];
       
        // check if first and last string are same
        if (string[i]) !== string[len - 1 - i] ) {
            return 'It is not a palindrome';
        }

            
}
return 'It is a palindrome';

}
// take input
const string = prompt('Enter a string: madam');

// call the function 
const value = checkPalindrome(string);
console.log(value);

    }
}
