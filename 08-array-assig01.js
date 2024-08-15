
console.log("================log First and Last element on console===================")
const fruit = ['Banana', 'Orange', 'Apple', 'Mango', 'Water Melon'];
console.log("First Element: Banana");
console.log( "Last Element:Water Melon");

console.log("============Add Papaya before Banana===========")
const fruit01 = ['Banana', 'Orange', 'Apple', 'Mango', 'Water Melon'];
fruit.unshift('Papaya');
console.log(fruit);

console.log("=============Remove Mango from array=======================================")
const fruit02 = ['Banana', 'Orange', 'Apple', 'Mango', 'Water Melon'];
const index = fruit.indexOf('Mango');
if (index !== -1) {
  fruit.splice(index, 1);
}
console.log(fruit);

console.log("=============Inserting Pineapple at last position=======================================")
const fruit03 = ['Banana', 'Orange', 'Apple', 'Mango', 'Water Melon'];
fruit.push('Pineapple');
console.log(fruit);


console.log("=====================Insert element dragon fruit before water melon===============================")
const fruit04 = ['Banana', 'Orange', 'Apple', 'Mango','Water Melon'];
const indexof = fruit.indexOf('watermelon');
fruit.splice(index, 0, 'dragon fruit');
console.log(fruit);


console.log("=================Replace an element orange with kiwi===================================")
const fruit05 = ['Banana', 'Orange', 'Apple', 'Mango', 'Water Melon'];
const index03 = fruit.indexOf('Orange');
fruit[index] = 'Kiwi';
console.log(fruit);


console.log("==============Log the element starting from index 1 to 4======================================")
const fruitList = ['Banana', 'Orange', 'Apple', 'Mango', 'Water Melon'];
for (let i = 1; i <= 4; i++) {
  console.log(fruitList[i]);
}


console.log("==================Select 3 element and log on console use length property==================================")

const fruitNum = ['Banana', 'Orange', 'Apple', 'Mango', 'Water Melon'];

const numElementsToSelect = 3;
const selectedFruit = fruitNum .slice(0, numElementsToSelect);

console.log(selectedFruit);








