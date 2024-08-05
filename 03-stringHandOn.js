console.log("==========Assignment1=============");
var sentence = "  Hey you are doing good, keep it up   ";
console.log("Given string is: ", sentence);

console.log("===========2===========");
var sentenceLength = sentence.length;
console.log("Total number of characters is: ",sentenceLength);

console.log("==========3==========");
var sentence = "   Hey you are doing good, keep it up    ";
var result = sentence.trim();
console.log(`Given sentence is: ${result} and it's length is: ${result.length}`);

console.log("==========4==========");
var sentence = "   Hey you are doing good, keep it up    ";
var sentenceAfterTrim = sentence.trim();
var sentenceAfterTrimLength= sentenceAfterTrim.length;
console.log("After string trim length is: ", sentenceAfterTrimLength);
console.log("Total number of extra space removed: ",sentenceLength- sentenceAfterTrimLength);

console.log("===========5=========");
var myLove = "Hey you are doing good, keep it up";
var result = myLove.split(" ");
console.log("Total number of words: ", result.length);

console.log("==========6==========");
var result = sentence.indexOf("good");
console.log("Index of character good is: ", result);

console.log("========7=========");
var result = sentence.indexOf("22");
console.log("Substring staring from index 22,keep it up ", result);

console.log("==========8==========");
var result = sentence.includes("Hey");
var result = sentence.includes("Hey")
console.log("Starting start with Hey?:", result);

console.log("=========9========");
var result = sentence.includes("up");
var result = sentence.includes("up")
console.log("Starting start end with up?:",result);

console.log("========String Template==========");
console.log(`I love only "JavaScript"`);
var city = "Pune";
var country = "India";
console.log(`My city name is: ${city} and country is ${country}`);





















  

