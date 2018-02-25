import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/component/authors.component';
import { AuthorsService } from './authors/service/authors.service';


//This class is the 1 app module where we will register components i.e step 2

@NgModule({
  declarations: [
    AppComponent, // default component
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ], // need to register all dependecnies which components are dependant upon.
  bootstrap: [AppComponent]
})
export class AppModule { }
