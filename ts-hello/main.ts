// function log(message){
//     console.log(message);
// }

// var message = 'Hello World';
// log(message);



// function doSomething(){
//         for(let i=0; i<5; i++){
//            console.log(i);
//         }
//         console.log('Finally: ' + i);
// }

// doSomething();


// let count = 5;
// count = 'a';

// let testing: any;
// testing = 1;
// testing = true;
// testing = 'a';

// let a: number; // can be integer or floating point
// let b: boolean;
// let c: string;
// let d: any;
// let e: number [] = [1, 2, 3];
// let f: any [] = [1, true, 'a', false];

// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;

// //enum
// enum Color {Red = 0, Green = 1, Blue = 2, Purple = 3};
// let backgroundColor = Color.Red;


// //to tell the intellisense that message is not an object but 
// // rather a string, we use "type assertion".  
// let message1;
// message1 = 'abc';
// let endsWithC2 = (<string>message1).endsWith('c'); //1st way
// let alternateiveWay2 = (message1 as string).endsWith('c'); //2nd way

//Arrow Function
// let log = function(message){
//     console.log(message);
// }
// let doLog = (message) => {
//     console.log(message);
// }
// let doLog1 = (message) => console.log(message);

//interfacess

//bad coding habit to pass so many parameters. Instead encapsulate them in
// in an object and pass that
// let drawPoint = (x, y, a, b, c, d) =>{
//     //..
// }
// //so..pass 'point' object. The argument is verbose and not scalable"point: {x: number, y: number}""
// let drawPoint = (point: {x: number, y: number}) =>{
//     //..
// }

// drawPoint({
//     x: 1,
//     y: 2
// })

//We pass IPoint as object and create interface - good coding practice
// interface IPoint{
//     x: number,
//     y: number
// }

// let drawPoint = (point: IPoint) => {
//     //..
// }

// drawPoint({
//     x: 1,
//     y: 2
// })


//Classes - Cohesion - i.e classes group together attributes and methods 
//together bcz they are both related together

// //interfaces are used only for declaration purposes and not for implementations
// interface IPoint{
//     x: number,
//     y: number,
//     draw: () => void
// }

// //We use class if we need to add implementation
// class Point{
//     x: number;
//     y: number;
//     draw(){
//         // ...
//     }
    
//     getDistance = (another: Point) => {
//         //..
//     }
// }

// let drawPoint = (point: IPoint) => {
//     //..
// }

// let getDistance = (pointA: Point, pointB: Point) => {
//     //..
// }

// drawPoint({
//     x: 1,
//     y: 2
// })


//We dont have multiple constructors (overridgin of constructors like in other languages)
// instead we have optional "?" parameter option
//question mark makes the argument optional AND all the parameters on the right 
//should be optional as well
// class Point{
//     x: number;
//     y: number;
//     constructor(x?: number, y?:number){
//         this.x = x;
//         this.y = y;
//     }
//     draw(){
//         console.log('X: ' + this.x + ', Y: ' + this.y );
//         // ...
//     }
//     // getDistance = (another: Point) => {
//     //     //..
//     // }
// }

// //point is an object - instance of a class
// let point = new Point(); //where we dont know if we'l be passing parameters yet
// let point = new Point(1, 2);
// point.x = 1;
// point.y = 2;
// point.draw();


//Access Modifers
    // public    
    // private
    // protected

// let point = new Point(1,2);
// point.x = 3;
// point.draw();

// Access Modifiers in Constructor Parameters
//  class Point{
//     constructor(private x?: number, private y?:number){
//         // dont have to initialize with this keyword anymore if you 
//         // decalre parameters with private or public keyword. TS compiler
//         // will generate the fields and also intialize the variables
//         // this.x = x;
//         // this.y = y;
//     }
//     draw(){
//         console.log('X: ' + this.x + ', Y: ' + this.y );
//         // ...
//     }
//     getDistance = (another: Point) => {
//          //..
//     }
// }
    


// //Properties
//  class Point{
//     constructor(private _x?: number, private _y?:number){
//     }
//     draw(){
//         console.log('X: ' + this._x + ', Y: ' + this._y );
//         // ...
//     }

//     get x(){
//         return this._x;
//     }

//     set x(value){
//         if(value < 0){
//             throw new Error ('value cannot be less than 0.');
//         }
//         this._x = value;
//     }

// }

// let point = new Point (1,2);
// // let x = point.getX(); // old way of getter
// let x = point.x; // new way of getter
// // point.setX(10); // old way of setter
// point.x = 10; // new way of getter
// point.draw();


// Modularity Concept
    // exporting - you can export function/classes/variables etc
    // importing - you can import @angular/core lib and evrything etc
// import{Point, a, b,c}
// import { Point } from './point'
// import { Point } from '@angular/core'

// let point = new Point (1,2);
// point.draw();

