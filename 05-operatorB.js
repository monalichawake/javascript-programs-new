console.log("=============1=============");

function greaterNumber (n1,n2){
    var result = n1>=n2 ? n1:n2;
    console.log(`Given number are ${n1}, ${n2} and greater number is: ${result}`);
}
greaterNumber (10,-10);
greaterNumber (800,899);

console.log("============2=============");

function isEvenOrOddNum (num){
    var result = num%2==0 ? true : false;
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








