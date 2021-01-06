import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../books.service';
import { BooksModel } from '../books/books.model';

@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.css']
})
export class NewbookComponent implements OnInit {
  title: string = 'Add new Book';
  bookItem = new BooksModel('','','','','','','','');
  book: BooksModel = {'_id':'', 'author':'', 'awards':'', 'genre':'', 'pic':'', 'publisher':'', 'review':'', 'title':''};

  constructor(private bookservice: BooksService, private router: Router, private route: ActivatedRoute) { }
  id: any = this.route.snapshot.paramMap.get('id');
  ngOnInit(): void {
    if(this.id != null){
      this.title = 'Update Book';
      console.log(this.id);
      this.bookservice.getSingleBook(this.id)
      .subscribe( (data)=>{
      this.book = JSON.parse(JSON.stringify(data));
      console.log(this.book);
      this.bookItem._id = this.id;
      this.bookItem.title = this.book.title;
      this.bookItem.author = this.book.author;
      this.bookItem.genre = this.book.genre;
      this.bookItem.awards = this.book.awards;
      this.bookItem.pic = this.book.pic;
      this.bookItem.publisher = this.book.publisher;
      this.bookItem.review = this.book.review;
    })
    }
  }

  add(){
    this.bookservice.addBook(this.bookItem);
    this.router.navigate(['nav/books']);
  }

  cancel(){
    this.router.navigate(['nav/books']);
  }

}
