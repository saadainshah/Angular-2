export class LikeComponent {

    constructor(private numberOfLikes: number,private state: boolean, count?:number ){
    }

    get nOLG(){
        return this.numberOfLikes;
    }

    set nOLS(numberOfLikesValue){
        this.numberOfLikes = numberOfLikesValue;
    }

    get stateG(){
        return this.state;
    }

    set stateS(stateValue){
        this.state = stateValue;
    }

    public like() {
        console.log('Inside like method: ');
        //if user 
    }




}


