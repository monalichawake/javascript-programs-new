var interview = function(age, person){
    if (age>=18) {
        console.log(`Hey ${person} you are eligible for interview`);
    } else {
        console.log(`Unfortunately , you are ${person}  you are not eligible for interview`);
    }
}
interview(21, "Viashali");
interview(17, "Maya");
interview(20,"Ujjawala");