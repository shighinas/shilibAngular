import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks(){
    return this.http.get('http://localhost:4000/books');
  }

  getSingleBook(id: any){
    return this.http.get('http://localhost:4000/books/'+ id);
  }

  addBook(item: object){
    return this.http.post('http://localhost:4000/books/add', item)
    .subscribe( (data)=>{
      console.log('Book subscribed',JSON.parse(JSON.stringify(data)));
    });
  }

  deleteBook(id: any){
    return this.http.get('http://localhost:4000/books/delete/'+ id);
  }

}
