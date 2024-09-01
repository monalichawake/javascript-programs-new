
console.log(`=============Palindrome logic===========`);

function CountPalindrome(string1) {
    const length2=string1.length;
let str1=' madam ';
for (let i = 0; i < length2 / 2; i++) {

    // check if first and last string are same
    if (string1[i] !== string1[length2 - 1 - i]) {
        return 'It is not a palindrome';
    }
}
return 'This string is palindrome :'+ str1;
}

const value = CountPalindrome("madam");

console.log(value);

function Palindrome(string2) {
    const length=string2.length;
let str2=' dad ';
for (let i = 0; i < length / 2; i++) {

    // check if first and last string are same
    if (string2[i] !== string2[length - 1 - i]) {
        return '';
    }
}
return 'This string is palindrome :'+ str2;
}
const value1 = Palindrome("dad");

console.log(value1);

function Palindrome1(string3) {
    const length3=string3.length;
let str3=' hello ';
for (let i = 0; i < length3 / 2; i++) {

    // check if first and last string are same
    if (string3[i] !== string3[length3 - 1 - i]) {
        return 'This string is not palindrome :'+ str3;
    }
}
return 'It is a palindrome';
}


const value3 = Palindrome1("hello");

console.log(value3);

console.log(`==============Anagram logic===================`);

function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
       console.log('invalid input');
       return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
       console.log(" Silent and listen are Anagrams:True ");
       
    } else { 
       console.log("False");
    }
  }
  checkStringsAnagram("silent", "listen")
  
  
  
  function checkStringsAnagram1(c, d) {
    let len1 = c.length;
    let len2 = d.length;
    if(len1 !== len2){
       console.log('invalid input');
       return
    }
    let str3 = c.split('').sort().join('');
    let str4 = d.split('').sort().join('');
    if(str3 === str4){
       console.log("True ");
       
    } else { 
       console.log(" Hello and World are not Anagrams: False");
    }
  }
  checkStringsAnagram1("hello", "world")
  
  
  
  function checkStringsAnagram2(e, f) {
    let len1 = e.length;
    let len2 = f.length;
    if(len1 !== len2){
       console.log('invalid input');
       return
    }
    let str5 = e.split('').sort().join('');
    let str6 = f.split('').sort().join('');
    if(str5 === str6){
       console.log("True ");
       
    } else { 
       console.log(" Such and Much are not Anagrams: False");
    }
  }
  checkStringsAnagram2("such", "much")
