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
var Point = /** @class */ (function () {
    function Point() {
        this.getDistance = function (another) {
            //..
        };
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
        // ...
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
