
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


class Polygon { 
    constructor(height, width) { 
       this.h = height; 
       this.w = width;
    } 

    test() { 
       console.log("The height of the polygon: ", this.h); 
       console.log("The width of the polygon: ",this. w) ;
    } 
 } 
 //creating an instance  
 var polyObj = new Polygon(10,20); 
 polyObj.test();



class print{
    constructor(value){
        value.forEach(function(element){
            console.log(element);
        });
    }
}
let Array =['a','b','c'];
new print(Array);