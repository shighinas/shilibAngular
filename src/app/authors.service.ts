import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }

  getAuthors(){
    return this.http.get('https://shilibangular.herokuapp.com/authors');
  }

  getSingleAuthor(id: any){
    return this.http.get('https://shilibangular.herokuapp.com/authors/'+ id);
  }

  addAuthor(item: object){
    console.log(item);
    return this.http.post('https://shilibangular.herokuapp.com/authors/add', item)
    .subscribe( (data)=>{
      console.log('author subscribed',JSON.parse(JSON.stringify(data)));
    });
  }

  deleteauthor(id: any){
    return this.http.get('https://shilibangular.herokuapp.com/authors/delete/'+id);
  }
}
