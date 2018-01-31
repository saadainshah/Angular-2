// with export - we make the class module and accessible elsewhere
export class Point{
    constructor(private _x?: number, private _y?:number){
    }
    draw(){
        console.log('X: ' + this._x + ', Y: ' + this._y );
        // ...
    }

}

