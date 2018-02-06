import { Component } from '@angular/core';


// this is step 1
// <courses> "courses" - <div class="courses"> ".courses" - <div id="courses"> "#courses"
                // with components you can extend html vocabulary by having custom html elements 
                //<rating> - TS will render rating component
                // html markup that we want to be rendered -- can be several lines so put in sepatate file
@Component({
    selector: 'courses', 
    template:'<h2>Courses</h2>' 
})
export class CoursesComponent{
}