//Arrow function
test= (Array)=>{
        Array.forEach((element)=>{
            console.log(element);
        });
    
};
let Array =[1,2,3];

test(Array);



//function with default value
test =(a=2,b=5)=>{
    return a*b;
};
console.log(test(10));

// Use module
import {print} from './module'
new print;


//Try if and esle(indexof,endwith,start with,include,repreat)
let des="hanieh";
if(des.indexOf('h')===0){
    console.log('yes');}
else{
console.log('no');
}



let User=[
    "hani",
    "ali" ]
for(let name of User){
   console.log(name);
}