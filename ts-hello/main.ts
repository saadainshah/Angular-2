/*function log(message){
    console.log(message);
}

var message = 'Hello World';
log(message);



function doSomething(){
        for(let i=0; i<5; i++){
           console.log(i);
        }
        console.log('Finally: ' + i);
}

doSomething();


let count = 5;
count = 'a';

let testing: any;
testing = 1;
testing = true;
testing = 'a';

let a: number; // can be integer or floating point
let b: boolean;
let c: string;
let d: any;
let e: number [] = [1, 2, 3];
let f: any [] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

//enum
enum Color {Red = 0, Green = 1, Blue = 2, Purple = 3};
let backgroundColor = Color.Red;
*/

//to tell the intellisense that message is not an object but 
// rather a string, we use "type assertion".  
// let message1;
// message1 = 'abc';
// let endsWithC2 = (<string>message1).endsWith('c');
// let alternateiveWay2 = (message1 as string).endsWith('c');