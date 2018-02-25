import { Component } from '@angular/core';
import { CoursesService } from './courses.service';


// this is step 1
// <courses> "courses" - <div class="courses"> ".courses" - <div id="courses"> "#courses"
                // with components you can extend html vocabulary by having custom html elements 
                //<rating> - TS will render rating component
                // html markup that we want to be rendered -- can be several lines so put in sepatate file
@Component({
    selector: 'courses', 
    // template:'<h2>Courses</h2>' 
    // template:'<h2>{{"Title:" + title}}</h2>' // render something in template dynamically. value will be 
    // updated at run-time. 
    // Directive - each course is a variable and courses is name of array it will iterate through.
    // String interpolation - {{courses}}
    template:`
        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
        `  
})
export class CoursesComponent{
    title = "List of Math Courses";
    courses;

    // Here we will not have any logic for consuming HTTP Service - allows to unit test the class by not mkaing it dependant 
    // upon HTTP Endpoint
    // Logic for calling an HTTP service (problem - this component will be tightly coupled with
    // with the Live HTTP Endpoint - future unit testing will make it dpendent upon Live HTTP endpoint, 
    //which we dont want) - so we want to make FAKE HTTP Endpoint service - 1st issue
    // have to implement the logic in multiple places if courses are being used elsewhere
    //3rd issue - component should not include any other logic besides presentation logic

    constructor(service: CoursesService){
        // let service = new CoursesService(); // with this new keyword we have tightly coupled the - OLD LINE 
    //     // coursescomponent with the coursesService. - if logic is inside component, we wouldnt be able to unit test the class. 
    //     //Now, with service variable defined as a parameter in CoursesService, you are injecting dependecies in the constructor. and 
    //     // dont have to modify the code at multiple places. Angular will create a CoursesService object itself.
    //     //Also, we can create a fake implementation of the service that doesnt use http services at the back-end i.e coursescomponent is decoupled with coursesservice.
    //     // new CoursesService(); - you have tightly coupled the class with its implementation. You cannot change at runtime 
    //     // but after you've used the class in the parameter, you've decoupled the class.
        this.courses = service.getCourses();
    }

    getTitle(){
        return this.title;
    }
}