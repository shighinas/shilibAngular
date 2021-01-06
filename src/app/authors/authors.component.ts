import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthorsService } from '../authors.service';
import { AuthorsModel } from './authors.model';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: AuthorsModel[] = [];
  constructor(private authorservice: AuthorsService, private router: Router, public _auth:AuthService) { }

  ngOnInit(): void {
    this.authorservice.getAuthors()
    .subscribe( (data)=>{
      this.authors = JSON.parse(JSON.stringify(data));
      console.log(this.authors);
    })
  }

  deleteAuthor(id:any, title:string){
    var y: boolean = confirm("Are you sure to delete "+ title );
    if(y){
      this.authorservice.deleteauthor(id)
      .subscribe( ()=>{
        console.log('deleted');
      });
    }
    this.ngOnInit();
  }

}
