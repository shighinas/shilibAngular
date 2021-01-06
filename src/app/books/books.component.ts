import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AuthService } from '../auth.service';
import { BooksService } from '../books.service';
import { BooksModel} from './books.model'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: BooksModel[]= [];
  constructor(private bookservice: BooksService, private router: Router, public _auth:AuthService) { }

  ngOnInit(): void {
    this.bookservice.getBooks()
    .subscribe( (data)=>{
      this.books = JSON.parse(JSON.stringify(data));
      console.log(this.books);
    });
  }

  deleteBook(id:any, title:string){
    var y: boolean = confirm("Are you sure to delete "+ title );
    if(y){
      this.bookservice.deleteBook(id)
      .subscribe( (data)=>{
        console.log('deleted', JSON.parse(JSON.stringify(data)));
      });
    }
    this.ngOnInit();
  }

}
