console.log('============Total number of element==========');

const array = [20,31,40,25,23,11,29,9,60,2,11];
console.log(array);
console.log("Total number of element is 11");

console.log(`==========Log First and Last element in array=========`);
console.log("First element :20");
console.log("Last element :11");

console.log(`===========Log the third last element using length property==========`);
console.log("Third last element : 60");

console.log("================Find Odd number from the loop====================================");
const array2 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
const oddNumbers = array.filter(num => num % 2 !== 0);
console.log(oddNumbers); // [31, 25, 23, 11, 29, 9, 11]

console.log("==============Find the number which are Multiple of 5======================================");
const array3 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
const multiplesOf5 = array.filter(num => num % 5 === 0);
console.log(multiplesOf5); 

console.log("=================Is number 115 available in array ===================================");
const array4 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(array.includes(115)); 
console.log("=================is number 23 available in array ===================================");
const array5 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(array.includes(23)); 

console.log("=================Insert number 55,66at index 3 ===================================");
const array6 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
array.splice(3, 0, 55, 60);
console.log(array);

console.log("=================Delete 3 element starting from index 4 and log array on console===================================");
const array7 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
array.splice(4, 3);
console.log(array);




 




