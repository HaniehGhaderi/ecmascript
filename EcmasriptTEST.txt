
//create a function 
function test(){
let a=10;
    console.log(a);
}
test();

// create a class
class print{
    constructor(){
        console.log("Hello world")
    }
}
new print;

class print{
    constructor(value){
        console.log(value)
    }
}
new print(15);

class print{
    constructor(value){
        value.forEach(function(element){
            console.log(element);
        });
    }
}
let Array =['a','b','c'];
new print(Array);