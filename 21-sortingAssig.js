
console.log(`==== Reverse the array=======`);
const array1 = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(array1);
const reverseArray1 = array1.reverse();
console.log(reverseArray1);

console.log(`=======Use sort method without any custom logic=======`);
const array2 = array1.sort()
console.log(array2);

console.log(`======Assending order using custom logic======`)
const array3 = [`113, 45, 56, 11, 32, 45, 109, 799, 56, 45`];
const array4 = array3.sort();
console.log(array3);

console.log(`========Find the Greatest Number==========`);
var array5 = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
var largest = 0;
for (let i = 0; i < array5.length; i++) {
    if (array5[i] > largest) {
        largest = array5[i];

        
    }
    
}
console.log(largest);

console.log(`======Find the Smallest Number======`);
var array6 =[113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
var smallest = array6[0]
for (let i = 0; i < array6.length; i++) {
    if (array6[i] < smallest) { 
        smallest = array6[i];
        
    }
    
}
console.log(smallest);

console.log(`========Removing duplicate element========`);
const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 113, 799, 56, 45 ];
const uniqueArray = [];

for (let index = 0; index < arrayRollNumbers.length; index++) {
    let element = arrayRollNumbers[index];
    if(uniqueArray.indexOf(element) == -1 ){
        uniqueArray.push(element);
    }
}
console.log(uniqueArray);









    
 





