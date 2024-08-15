let array = [10,20,30,20,80];
console.log (array);
console.log (array[2]);//read the value from array
console.log (array [array.length-1]);//read the last

console.log(`============update==========`);

array[3] = 100;
console.log(array);
let arrayList=["jenny","Eloy","Stew","Bill","Warn"];
console.log(arrayList[2]);
arrayList[3]="alt";
console.log(arrayList);

console.log(`==============Traversing an array ======================`);

for (let index = 0; index < arrayList.length; index++) {
    const element = arrayList[index];
    console.log(element);  
}

console.log(`==============Traversing an array in reverse order ======================`);
for (let index = arrayList.length-1; index >=0; index--) {
    const element = arrayList[index];
    console.log(element);   
}

console.log(`============== Print only even indexed elements  ===============`);
for (let index = 0; index < arrayList.length; index++) {
    if (index%2==0) {
        const element = arrayList[index];
        console.log(element); 
    }
}




