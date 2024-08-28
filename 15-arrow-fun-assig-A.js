
console.log(`======With no args and no return value========`);

let show = ()=>{
    console.log('Good Morning, "Today is Monday"');  
}
show();

console.log("Multiplication of 3 value=======");
let multiply = (n1, n2, n3)=>{
    let result = n1*n2*n3;
    return result;
}
let mul = multiply(5,5,2);
console.log(`Multiplication is: ${mul}`);
