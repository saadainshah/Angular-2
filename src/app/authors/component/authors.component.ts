import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../service/authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
 
})
export class AuthorsComponent implements OnInit {
  title ="List of Authors"
  authors;

  constructor(service: AuthorsService) { 
    this.authors = service.getAuthors();
  }

  getTitle(){
    return this.title;
  }


  ngOnInit() {
  }

}
