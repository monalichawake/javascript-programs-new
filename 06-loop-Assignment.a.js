console.log("==========Count Vowel=========");

var sentence = "I am very good IT Developer";
var Vowels = "aeiou";
var VowelCount = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    char = char.toLowerCase();
    if(Vowels.includes(char)){
        VowelCount++;

    }

}
console.log(`Vowels count is: ${VowelCount}`);

console.log("==========Function to get the sum of cube of number from 1 to 5=========");
var sumCube = 0;
for (let index = 1; index <=5; index++) {
   sumCube = sumCube + index * index * index;
}
console.log(`Sum Cube is : ${sumCube}`);

console.log("========Function to get odd positioned chars without empty space=========");


