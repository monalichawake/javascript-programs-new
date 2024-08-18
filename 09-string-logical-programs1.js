
const str1 ="Hello, World";
const length1 = str1.length;
console.log(`The length of the string "${str1}" is: ${length1}`);

const str2 ="Javascript is the language of Internet";
const length2 = str2.length;
console.log(`The length of the string "${str2} is :${length2}`);


console.log(`=======2==========`);

function getLastCharacter(str) {
    return str. charAt(str.length - 1);
}

const str3 = "Hey, my friend,programming Language";
const str4 = "I am learning logical programs";
const str5 = "Angular";

console.log(`The last character of the string "$(str3)" is:
${getLastCharacter(str3)}`);
console.log(`The last character of the string "$(str4)" is:
${getLastCharacter(str4)}`);
console.log(`The last character of the string "$(str5)" is:
${getLastCharacter(str5)}`);

 console.log(`========3=======`);
 function getFirstCharacter(str) {
    return str.charAt(0);
 }

 const str6 = "React";
 const str7 ="Elon Musk";
 const str8 ="Apple founder is Stew Job";

 console.log(`The first character of the string "${str6}" is: ${getFirstCharacter(str6)}`);
 console.log(`The first character of the string "${str7}" is: ${getFirstCharacter(str7)}`);
 console.log(`The first character of the string "${str8}" is: ${getFirstCharacter(str8)}`);

 
    console.log(`=======4========`);
    function containsUI(str) {
        return str.includes('UI');
  }

  const str9 = "React - UI Developer";
  const str10 = "UI Developer";
  const str11 = "Front end and backend technogoies";

  console.log(`Does the string "${str9}" contain 'UI'? ${containsUI(str9)}`);
  console.log(`Does the string "${str10}" contain 'UI'? ${containsUI(str10)}`);
  console.log(`Does the string "${str11}" contain 'UI'? ${containsUI(str11)}`);
  

  console.log(`========5========`);
  function splitString(str, delimiter) {
    return str.split(delimiter);
  }

  const str12 = "apple,orange,banana";
  const str13 ="Stew,Bill,Jenny,Elon";

  const result12 = splitString(str12, ',');
  console.log(`The array of substring form "${str12}" is:`, result12);

  const result13 = splitString(str13, ',');
  console.log(`The array of substring form "${str13}" is:`, result13);
  
  
    console.log("=======6=======");
    console.log(`--------Using Predefined Methods-------`);
    

    function reverseStringUsingMethods(str) {
        return str.split('').reverse().join('');
    }

    const str14 = "Software";
    const str15 = "UI Developer";

    console.log(`The reverse of the string "${str14}" is:
    ${reverseStringUsingMethods(str14)}`);
    console.log(`The reverse of the string "${str15}" is:
    ${reverseStringUsingMethods(str15)}`);

    console.log(`-------Without using Predefined Methods-------`);

    function reverseStringManually(str) {
        let reversedStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversedStr += str[i];
    
            }
            return reversedStr;
    }

    const str16 = "Web Developer";
    const str17 = "Billion Dollar";
    const str18 = "Java";

    console.log(`The reverse of the string "${str16}" is: 
    ${reverseStringManually(str16)}`);
    console.log(`The reverse of the string "${str17}" is: 
    ${reverseStringManually(str17)}`);
    console.log(`The reverse of the string "${str18}" is: 
    ${reverseStringManually(str18)}`);
    
        
    

        


        





