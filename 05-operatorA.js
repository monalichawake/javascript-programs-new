function squareOfWordLength(sentence){
    console.log(`Given sentence is: ${sentence}`);
    var result = sentence.split(" ");
    var len = result.length;
    var square = len * len;
    return square;
}
var result = squareOfWordLength("JavaScript");
console.log(`Square of world length is: ${result}`);

var result = squareOfWordLength("Google Chrome");
console.log(`Square of world length is: ${result}`);

var result = squareOfWordLength("Web Developer Smart");
console.log(`Square of world length is: ${result}`);

var string = (` "I am Angular Developer" `);
var result = string.trim();
console.log(`Given string is: ${result} is: ${result.length}`);

var result = 24 / 4;
console.log(`The result after Division is : ${result}`);

var result = 24 * 4;
console.log(`Multiplication is : ${result}`);



