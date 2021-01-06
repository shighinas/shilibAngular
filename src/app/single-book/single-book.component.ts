import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';
import { BooksModel } from '../books/books.model';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {
  book: BooksModel={'_id':'','author':'','awards':'','genre':'','pic':'','publisher':'','review':'','title':''};
  constructor(private bookservice: BooksService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.bookservice.getSingleBook(this.route.snapshot.paramMap.get('id'))
    .subscribe( (data)=>{
      this.book = JSON.parse(JSON.stringify(data));
      console.log(this.book);
    });
  }

}
