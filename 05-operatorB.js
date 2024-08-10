console.log("=============1=============");

function greaterNumber (n1,n2){

    var result = n1>=n2 ? n1:n2;
    console.log(`Given number are ${n1}, ${n2} and greater number is: ${result}`);
}
greaterNumber (10,-10);
greaterNumber (800,899);

console.log("============2=============");

function isEvenOrOddNum (num){
    var result = num%2==0? true:false
    return result;
}

var result = isEvenOrOddNum(29);
console.log(`Is Number : ${29} even : ${result}`);

var result = isEvenOrOddNum(44);
console.log(`Is Number : ${44} even : ${result}`);

var result = isEvenOrOddNum(0);
console.log(`Is Number : ${0} even : ${result}`);

var result = isEvenOrOddNum(101);
console.log(`Is Number : ${101} even : ${result}`);

console.log("==============3============");

function wordLength(num){
    var result=num.length;
    var check=result%2==0 ? "even" : "odd";
    return check;

}
var result=wordLength("Javascript");
console.log(`The word "Javascript" has ${result} length`);

var result=wordLength("Developer");
console.log(`The word "Developer" has ${result} length`);

var result=wordLength("Google");
console.log(`The word "Google" has ${result} length`);










